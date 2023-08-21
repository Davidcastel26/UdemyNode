"use strict";

var socket = io();
var saveNote = function saveNote(title, description) {
  socket.emit('client:newnote', {
    title: title,
    description: description
  });
};
var deleteNote = function deleteNote(id) {
  // console.log(id);
  socket.emit('client:deletenote', id);
};
var getNote = function getNote(id) {
  socket.emit("client:getnote", id);
};
var updateNote = function updateNote(id, title, description) {
  socket.emit('client:updatenote', {
    id: id,
    title: title,
    description: description
  });
};
socket.on('server:newnote', appendNote);
socket.on('server:loadnotes', renderNotes);
socket.on('server:selectednote', function (noteFound) {
  // console.log(data);
  var title = document.querySelector('#title');
  var description = document.querySelector('#description');
  title.value = noteFound.title;
  description.value = noteFound.description;
  savedId = noteFound.id;
});