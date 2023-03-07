import { createQueueingService, createService } from "@rxfx/service";

import { FileUploadRequest, UploadProgress } from "../types";
import { bus } from "./bus";
import { promiseOfUploadOfFile } from "./upload-impl";

/* prettier-ignore */
export const uploadService = createQueueingService<FileUploadRequest, UploadProgress, Error>(
  "upload",               // A namespace for events: upload/request
  bus,                    // The bus our listener will be on
  promiseOfUploadOfFile   // The effect-determining function
);
