(function(exports) {
  function testListInitialize() {
    var list = new List();

    assert.isTrue(list.lists.length === 0);
  }

  function testaddListText() {
    var list = new List();
    list.addListText("Favourite drink: seltzer")

    assert.isTrue(list.lists[0] === "Favourite drink: seltzer")
  }

  function testShowNotes() {
    var list = new List();
    // list.addListText("Favourite drink: seltzer")
    // assert.isTrue(list.lists[0] === "Favourite drink: seltzer")
    // list.addListText("Favourite food: burger")
    // assert.isTrue(list.lists[1] === "Favourite food: burger")
    list.addListText("Favourite drink: seltzer")
    assert.isTrue(list.ShowNotes().includes("Favourite rink: seltzer"))
   }
  testListInitialize();
  testaddListText();
  testShowNotes();
})(this);
