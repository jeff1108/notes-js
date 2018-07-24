(function(exports) {
  function NoteListView(list) {
    this.noteList = list;
  };

  NoteListView.prototype.views = function() {
    return "<ul><li><div>" + this.noteList.lists.join("</div></li><li><div>") + "</div></li></ul>"
  }
  exports.NoteListView = NoteListView;
})(this)

var noteListView
noteListView = console.log(NoteListView());
