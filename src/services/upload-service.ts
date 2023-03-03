import { FileUploadRequest } from "../types";

export const uploadService = {
  request(req: FileUploadRequest) {
    console.log("TODO handle upload/request", req);
  },
  cancel() {
    console.log("TODO handle upload/cancel");
  },
};
