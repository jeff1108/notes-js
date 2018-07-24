(function(exports) {
  function testNoteListView() {
    var list1 = new List();
    list1.addNoteText("Favourite food: pesto")
    var list2 = new List();
    list1.addNoteText("Favourite drink: seltzer")
    var listview = new NoteListView(list1);



    assert.isTrue(listview.views(list1) === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
  }
  testNoteListView();
})(this);
