describe("Component: Controls", () => {
  describe('"Cancel Current" Button', () => {
    it("Is Disabled");
    describe("When: uploadService.started", () => {
      it("Is Enabled");
      describe("When: Clicked", () => {
        it("Calls: uploadService.cancelCurrent()");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it("Is Disabled");
      });
    });
  });
  describe('"Cancel Current And Queued" Button', () => {
    it("Is Disabled");
    describe("When: uploadService.started and more than one pending file", () => {
      it("Is Enabled");
      describe("When: Clicked", () => {
        it("Calls: uploadService.cancelCurrentAndQueued()");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it("Is Disabled");
      });
    });
  });
});
