"use strict";

var noteList = document.querySelector('#notes');
var savedId = '';
var noteUI = function noteUI(note) {
  // console.log(note);

  var div = document.createElement('div');
  div.innerHTML = "\n    <div class=\"card card-body rounded-0 mb-2\">\n        <div class=\"d-flex justify-content-between\">\n            <h1 class=\"h3 card-title\">".concat(note.title, "</h1>\n            <div>\n                <button class=\"btn btn-danger delete\" data-id=\"").concat(note.id, "\"> X </button>\n                <button class=\"btn btn-secondary update\" data-id=\"").concat(note.id, "\"> \u2699\uFE0F </button>\n            </div>\n        </div>\n        <p>").concat(note.description, "</p>\n    </div>\n    ");
  var btnDelete = div.querySelector('.delete');
  var btnUpdate = div.querySelector('.update');
  btnDelete.addEventListener('click', function () {
    // console.log(btnDelete.dataset.id);
    deleteNote(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener('click', function () {
    // console.log(btnUpdate.dataset.id);
    getNote(btnUpdate.dataset.id);
  });
  return div;
};
var renderNotes = function renderNotes(notes) {
  noteList.innerHTML = '';
  notes.forEach(function (note) {
    noteList.append(noteUI(note));
  });
};
var appendNote = function appendNote(note) {
  noteList.append(noteUI(note));
};