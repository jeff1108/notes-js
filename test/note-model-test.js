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

function testAddText() {
  var note = new Note();
  assert.isTrue(note.AddText("Hi Jeff") === "Hi Jeff")

}

  testNoteDefaultText();
  testReturnText();
})(this);
