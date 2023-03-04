import produce from "immer";
import { createQueueingService, Action, createService } from "@rxfx/service";

import { FileUploadRequest, UploadProgress, QueueItem } from "../types";
import { bus } from "./bus";
import { observableOfUploadOfFile } from "./upload-impl";

/* prettier-ignore */
export const uploadService = createQueueingService<FileUploadRequest, UploadProgress, Error, QueueItem[]>(
  "upload",                 // A namespace for events: upload/request
  bus,                      // The bus our listener will be on
  observableOfUploadOfFile, // The lazy, cancelable, and incremental effect,
  (ACs) => (state: QueueItem[] = [], event: Action<FileUploadRequest>) =>
  produce(state, (items) => {
    if (!event?.type) return;

    // Adding to the queue
    if (ACs.request.match(event)) {
      const item: QueueItem = {
        name: event.payload.name,
        status: "pending",
        percentComplete: "0"
      };
      items.push(item);
    }

    // Updating progress
    if (ACs.next.match(event)) {
        const { loaded, total } = event.payload;
        const percentComplete = loaded
          ? String(Math.round((loaded * 100) / total)).padStart(2, "0")
          : "- ";

          const itemToUpdate =
          items.find(
            (item) =>
              item.name === event.payload?.name && item.status !== "canceled"
          ) || items[0]
  
        itemToUpdate.percentComplete = percentComplete;
      }

    // Clearing completed
    if (ACs.complete.match(event)) {
      // pop one off
      items.shift();
    }
  })  
);
