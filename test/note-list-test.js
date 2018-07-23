(function(exports) {
  function testListInitialize() {
    var list = new List();

    assert.isTrue(list.lists.length === 0);
  }
  testListInitialize();
})(this);
