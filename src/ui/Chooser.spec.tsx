describe("Component: Chooser", () => {
  describe("State", () => {
    it("Has: chosenFile, uploadCaption, uploadVisibility");
  });
  describe("Upload Button", () => {
    it("Is Hidden");
  });
  describe("When: A File is Chosen FILE_NAME.TXT", () => {
    describe("Upload Button", () => {
      it("Is Visible");
      it("Displays the Text Upload");
      it("Displays the Text FILE_NAME.TXT");
      describe("When: Clicked", () => {
        it("Calls uploadService.request with the file");
        it("Is Hidden");
      });
    });
  });
});
