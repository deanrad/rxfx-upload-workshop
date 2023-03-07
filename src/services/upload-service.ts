import { createQueueingService, createService } from "@rxfx/service";

import { FileUploadRequest, UploadProgress } from "../types";
import { bus } from "./bus";
import { observableOfUploadOfFile } from "./upload-impl";

/* prettier-ignore */
export const uploadService = createQueueingService<FileUploadRequest, UploadProgress, Error>(
  "upload",                 // A namespace for events: upload/request
  bus,                      // The bus our listener will be on
  observableOfUploadOfFile  // The lazy, cancelable, and incremental effect
);
