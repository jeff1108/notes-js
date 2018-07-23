(function(exports) {
  function testListInitialize() {
    var list = new List();

    assert.isTrue(list.lists.length === 0);
  }

  function testaddNoteText() {
    var list = new List();
    var note = new Note();
    list.addNoteText("Favourite drink: seltzer")

    assert.isTrue(list.lists[0] === "Favourite drink: seltzer")
  }

  function testShowNotes() {
    var list = new List();
    list.addNoteText("Favourite drink: seltzer")
    assert.isTrue(list.ShowNotes().includes("Favourite drink: seltzer"))
   }


  testListInitialize();
  testaddNoteText();
  testShowNotes();
})(this);
