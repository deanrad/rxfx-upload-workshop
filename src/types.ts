export interface FileUploadRequest {
  name: string;
  file: File;
}

// What a queue item looks like in the UI
export interface QueueItem {
  name: string;
  status?: "complete" | "error" | "canceled" | "pending";
  percentComplete?: string;
}
