describe("Component: Queue", () => {
  describe("Header", () => {
    it.todo("Shows no completed text");
    it.todo("Shows no hourglass");
  });
  describe("When: uploadService.isActive", () => {
    it.todo("Shows an hourglass");
    describe("When: uploadService.canceled", () => {
      it.todo("Shows no hourglass");
    });
  });
  describe("When: uploadService.completed", () => {
    it.todo('Shows "1 completed"');
    describe("When: uploadService.completed", () => {
      it.todo('Shows "2 completed"');
    });
  });
  describe("Items", () => {
    it.todo("Shows no items");
    describe("When: uploadService.request File.mp3", () => {
      it.todo('Shows "File.mp3" text');
      it.todo('Shows "0 %" text');
      describe("When: uploadService.next File.mp3, loaded 10, total 20", () => {
        it.todo('Shows "50 %" text');
        describe("When: uploadService.cancelCurrent()", () => {
          it.todo('Shows "canceled" text');
        });
      });
      describe("When: uploadService.request File2.mp3", () => {
        it.todo('Shows "File2.mp3" text');
        it.todo('Shows "0 %" text');
        it.todo("When: uploadService.next File2.mp3, loaded 5, total 20");
        it.todo('Shows "25 %" text');
        describe("When: uploadService.cancelCurrent()", () => {
          it.todo('Shows "canceled" text');
        });
      });
      describe("When: uploadService.complete", () => {
        it.todo("pops one off the stack");
      });
      describe("When: uploadService.cancelCurrentAndQueued()", () => {
        it.todo("Shows all files as canceled");
        it.todo("Shows no hourglass");
      });
    });
  });

  describe("Snapshot", () => {
    it.todo("matches");
  });
});
