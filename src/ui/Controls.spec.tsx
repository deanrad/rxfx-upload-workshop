describe("Component: Controls", () => {
  describe('"Cancel Current" Button', () => {
    it.todo("Is Disabled");
    describe("When: uploadService.started", () => {
      it.todo("Is Enabled");
      describe("When: Clicked", () => {
        it.todo("Calls: uploadService.cancelCurrent()");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it.todo("Is Disabled");
      });
    });
  });
  describe('"Cancel Current And Queued" Button', () => {
    it.todo("Is Disabled");
    describe("When: uploadService.started and more than one pending file", () => {
      it.todo("Is Enabled");
      describe("When: Clicked", () => {
        it.todo("Calls: uploadService.cancelCurrentAndQueued()");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it.todo("Is Disabled");
      });
    });
  });

  describe("Snapshot", () => {
    it("matches", () => {
      expect({}).toMatchInlineSnapshot(`Object {}`);
    });
  });
});
