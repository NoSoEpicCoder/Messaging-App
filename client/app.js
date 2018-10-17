let socket = io();
let messageArray = [];

$('form').submit(() => {
  let message = $('#message').val();
  let initials = $('#initials').val();
  message = initials + ": " + message;
  messageArray.push(message);
  socket.emit('message', message);
  $('#message').val('');
  return false;
});

socket.on('message', (msg) => {
  $('<li>').text(msg).appendTo('#history');
});
