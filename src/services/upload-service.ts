import produce from "immer";
import { after } from "@rxfx/after";
import { Action, createQueueingService } from "@rxfx/service";
import { concat } from "rxjs";
import { map, takeWhile } from "rxjs/operators";
import { AjaxResponse, ajax } from "rxjs/ajax";
import { bus } from "./bus";
import { FileUploadRequest, QueueItem } from "../types";

export const uploadService = createQueueingService<
  FileUploadRequest,
  AjaxResponse<unknown>,
  Error, // TOOD use ajax error
  QueueItem[]
>(
  "upload",
  bus,
  observableOfUploadOfFile,
  // promiseOfUploadOfFile,
  // mockUploadOfFile,
  (ACs) =>
    (state: QueueItem[] = [], event: Action<FileUploadRequest> = {}) =>
      produce(state, (items) => {
        // Adding to the queue
        if (ACs.request.match(event)) {
          const item: QueueItem = {
            name: event.payload.name,
            status: "pending",
            percentComplete: "0",
          };
          items.push(item);
        }

        // Modifying the queue
        const itemToUpdate =
          items.find(
            (item) =>
              item.name === event.payload?.name && item.status !== "canceled"
          ) || items[0];

        // HACK mark all canceled - workaround for ACs.canceled lacking a payload
        if (ACs.canceled.match(event)) {
          items
            .filter((item) => item.status === "pending")
            .forEach((item) => (item.status = "canceled"));
        }

        if (ACs.next.match(event)) {
          const { loaded, total } = event.payload;
          const percentComplete = loaded
            ? String(Math.round((loaded * 100) / total)).padStart(2, "0")
            : "- ";

          itemToUpdate.percentComplete = percentComplete;
        }

        if (ACs.complete.match(event)) {
          // pop one off
          items.shift();

          items
            .filter((item) => item.status === "canceled")
            .forEach((item) => {
              delete items[item];
            });
        }
      })
);

function observableOfUploadOfFile({ file }: FileUploadRequest) {
  return ajax({
    // Force error with url: 'https://httpbin.org/status/501'
    url: "https://httpbin.org/post",
    method: "POST",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
    includeUploadProgress: true,
  }).pipe(
    map((update) => ({
      ...update,
      name: file.name,
    }))
    // TODO complete when we've uploaded - before the entire response is echoed back
    // ala: takeWhile((update) => update.loaded < update.total)
  );
}

function promiseOfUploadOfFile({ file }: FileUploadRequest) {
  return (
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    })
      // Wait until the entire response is recieved
      // (Otherwise the promise resolves when only the headers have arrived)
      .then((resp) => resp.text())
      // Simulate the one-at-the-end notification
      .then(() => ({ name: file.name, total: 10, loaded: 10 }))
  );
}

function mockUploadOfFile(file: FileUploadRequest) {
  return concat(
    after(300, { name: file.name, total: 10, loaded: 1 }),
    after(300, { name: file.name, total: 10, loaded: 2 }),
    after(300, { name: file.name, total: 10, loaded: 3 }),
    after(300, { name: file.name, total: 10, loaded: 4 }),
    after(300, { name: file.name, total: 10, loaded: 5 }),
    after(300, { name: file.name, total: 10, loaded: 6 }),
    after(300, { name: file.name, total: 10, loaded: 7 }),
    after(300, { name: file.name, total: 10, loaded: 8 }),
    after(300, { name: file.name, total: 10, loaded: 9 }),
    after(300, { name: file.name, total: 10, loaded: 10 })
  );
}
