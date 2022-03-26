const socket = io('http://localhost:3000');

const message = document.getElementById('msg').innerHTML;

const handleMessage = () => {
  console.log('message.value', message);
  socket.emit('msgToServer', { data: message });
};

socket.on('msgToClient', (data) => {
  console.log('msgToClient', data);
});
