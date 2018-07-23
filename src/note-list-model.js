(function(exports) {
  function List() {
    this.lists = [];
  };

  List.prototype.addListText = function(list) {
     this.lists.push(list);
  }
  List.prototype.ShowNotes = function() {
     return this.lists;
  }
  exports.List = List;
})(this)

var list
list = console.log(List());
