(function(exports) {
  function testNoteDefaultText() {
    var note = new Note();

    assert.isTrue(note.text === "My first note, woo");
  }
  function testReturnText() {
    var note = new Note();

    assert.isTrue(note.returnText() === "My first note, woo")
  }
    // if (note.returnText() !== "My first note, woo") {
    //   throw new Error("Your note is not work");
    //   }



  testNoteDefaultText();
  testReturnText();
})(this);
