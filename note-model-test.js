(function(exports) {
  function testNoteDefaultText() {
    var note = new Note();

    if (note.text !== "My first note, woo") {
      throw new Error("Your note isn't starting with the right default text");
    }
  }
  function testReturnText() {
    var note = new Note();

    if (note.returnText() !== "My first note, woo") {
      throw new Error("Your note is not work");
      }
    }

  testNoteDefaultText();
  testReturnText();
})(this);
