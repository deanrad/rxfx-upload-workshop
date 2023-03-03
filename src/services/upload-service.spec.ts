describe("Service: UploadService", () => {
  describe("Payloads", () => {
    it("Request: name, File");
    it("Next: name, percentComplete");
    it("Complete: null");
    it("Cancel: null");
  });
  describe("Effect", () => {
    describe("Effect: Calls observableUpload, promiseUpload, or mockUpload", () => {
      it("Concurrency: Queued");
    });
  });
  describe("promiseUpload", () => {
    describe("When: uploadService.request(FILE_NAME.txt)", () => {
      it("Calls fetch");
      describe("When: Awaited", () => {
        it("Yields a next event with name, percentComplete 100");
        it("completes");
      });
    });
  });
  describe("mockUpload", () => {
    describe("When: uploadService.request()", () => {
      it("calls concat, after");
      describe("When: Awaited", () => {
        it("Yields several percentComplete updates");
        it("Completes");
      });
    });
    describe("When: uploadService.request()", () => {
      describe("When: uploadService.cancelCurrent();", () => {
        it("Cancels");
      });
    });
  });
  describe("observableUpload", () => {
    describe("When: uploadService.request()", () => {
      it("rxjs/ajax ajax");
      describe("When: Awaited", () => {
        it("Yields several percentComplete updates");
        it("Completes");
      });
    });
    describe("When: uploadService.request()", () => {
      describe("When: uploadService.cancelCurrent();", () => {
        it("Cancels");
      });
    });
  });
  describe("Reducer", () => {
    describe("State: State", () => {
      it("items: [{ name, status, percentComplete }]");
    });
    describe("Event: Request", () => {
      it("Pushes a new pending item");
    });
    describe("Event: Next (name)", () => {
      it("Updates percentComplete of (name)");
    });
    describe("Event: Canceled", () => {
      it("Changes all pending to canceled");
    });
    describe("Event: Complete", () => {
      it("Pops first off the queue");
      it("Removes all canceled");
    });
  });
});
