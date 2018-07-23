(function(exports) {
  function Note() {
    this.text = 'My first note, woo'
  };
  Note.prototype.returnText = function() {
    return this.text;
  }

  Note.prototype.addText = function(text) {
    return this.text = text
  }
  exports.Note = Note;
})(this)

var note
note = console.log(Note());
