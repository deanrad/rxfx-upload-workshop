import { after } from "@rxfx/after";
import { concat, Observable } from "rxjs";
import { map, takeWhile } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import { FileUploadRequest, UploadProgress } from "../types";

export function observableOfUploadOfFile({
  file,
}: FileUploadRequest): Observable<UploadProgress> {
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

export function promiseOfUploadOfFile({ file }: FileUploadRequest) {
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
      .then(() => ({ name: file.name, total: 100, loaded: 100 }))
  );
}

export function mockUploadOfFile(file: FileUploadRequest) {
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
