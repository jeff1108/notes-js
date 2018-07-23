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
  testListInitialize();
  testaddListText();
})(this);
