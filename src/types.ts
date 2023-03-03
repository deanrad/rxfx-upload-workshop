/** The viewmodel of a file chosen in the UI */
export interface FileUploadRequest {
  name: string;
  file: File;
}

/** The viewmodel of an item in the Queue */
export interface QueueItem {
  name: string;
  status?: "complete" | "error" | "canceled" | "pending";
  percentComplete?: string;
}

/** An indicator of upload progress.
 * A promise-based file uploader would return a single UploadProgress event,
 * with total equal to loaded.
 * However, an Observable might have several UploadProgress events for the
 * same file, with `total` held constant, and `loaded` increasing steadily.
 * */
export interface UploadProgress {
  name: string;
  total: number;
  loaded: number;
}
