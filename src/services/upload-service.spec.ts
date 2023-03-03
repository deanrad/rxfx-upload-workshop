describe("Service: UploadService", () => {
  describe("Payloads", () => {
    it.todo("Request: name, File");
    it.todo("Next: name, percentComplete");
    it.todo("Complete: null");
    it.todo("Cancel: null");
  });
  describe("Effect", () => {
    describe("Effect: Calls observableUpload, promiseUpload, or mockUpload", () => {
      it.todo("Concurrency: Queued");
    });
  });
  describe("promiseUpload", () => {
    describe("When: uploadService.request(FILE_NAME.txt)", () => {
      it.todo("Calls fetch");
      describe("When: Awaited", () => {
        it.todo("Yields a next event with name, percentComplete 100");
        it.todo("completes");
      });
    });
  });
  describe("mockUpload", () => {
    describe("When: uploadService.request()", () => {
      it.todo("calls concat, after");
      describe("When: Awaited", () => {
        it.todo("Yields several percentComplete updates");
        it.todo("Completes");
      });
    });
    describe("When: uploadService.request()", () => {
      describe("When: uploadService.cancelCurrent();", () => {
        it.todo("Cancels");
      });
    });
  });
  describe("observableUpload", () => {
    describe("When: uploadService.request()", () => {
      it.todo("rxjs/ajax ajax");
      describe("When: Awaited", () => {
        it.todo("Yields several percentComplete updates");
        it.todo("Completes");
      });
    });
    describe("When: uploadService.request()", () => {
      describe("When: uploadService.cancelCurrent();", () => {
        it.todo("Cancels");
      });
    });
  });
  describe("Reducer", () => {
    describe("State: State", () => {
      it.todo("items: [{ name, status, percentComplete }]");
    });
    describe("Event: Request", () => {
      it.todo("Pushes a new pending item");
    });
    describe("Event: Next (name)", () => {
      it.todo("Updates percentComplete of (name)");
    });
    describe("Event: Canceled", () => {
      it.todo("Changes all pending to canceled");
    });
    describe("Event: Complete", () => {
      it.todo("Pops first off the queue");
      it.todo("Removes all canceled");
    });
  });
});
