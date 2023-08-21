"use strict";

var noteForm = document.querySelector('#noteForm');
var title = document.querySelector('#title');
var description = document.querySelector('#description');
noteForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(
  //     title.value,
  //     description.value
  // );
  if (savedId) {
    updateNote(savedId, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }
  title.value = '';
  description.value = '';
  title.focus();
});

// const socketIO = io()

// socketIO.on('ping',() => {
//     console.log('ping');

//     socketIO.emit('pong')
// })