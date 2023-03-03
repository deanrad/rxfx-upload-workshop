import { FileUploadRequest } from "../types";
import { promiseOfUploadOfFile } from "./upload-impl";

export const uploadService = {
  request(req: FileUploadRequest) {
    promiseOfUploadOfFile(req);
  },
  cancel() {
    console.log("TODO handle upload/cancel");
  },
};
