describe("Component: Queue", () => {
  describe("Header", () => {
    it("Shows no completed text");
    it("Shows no hourglass");
  });
  describe("When: uploadService.isActive", () => {
    it("Shows an hourglass");
    describe("When: uploadService.canceled", () => {
      it("Shows no hourglass");
    });
  });
  describe("When: uploadService.completed", () => {
    it('Shows "1 completed"');
    describe("When: uploadService.completed", () => {
      it('Shows "2 completed"');
    });
  });
  describe("Items", () => {
    it("Shows no items");
    describe("When: uploadService.request File.mp3", () => {
      it('Shows "File.mp3" text');
      it('Shows "0 %" text');
      describe("When: uploadService.next File.mp3, loaded 10, total 20", () => {
        it('Shows "50 %" text');
        describe("When: uploadService.cancelCurrent()", () => {
          it('Shows "canceled" text');
        });
      });
      describe("When: uploadService.request File2.mp3", () => {
        it('Shows "File2.mp3" text');
        it('Shows "0 %" text');
        it("When: uploadService.next File2.mp3, loaded 5, total 20");
        it('Shows "25 %" text');
        describe("When: uploadService.cancelCurrent()", () => {
          it('Shows "canceled" text');
        });
      });
      describe("When: uploadService.complete", () => {
        it("pops one off the stack");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it("Shows all files as canceled");
        it("Shows no hourglass");
      });
    });
  });
});
