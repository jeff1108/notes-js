(function(exports) {
  function List() {
    this.lists = [];
  };

  List.prototype.addListText = function(list) {
    return this.lists.push(list);
  }
  exports.List = List;
})(this)

var list
list = console.log(List());
