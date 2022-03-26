const socket = io('http://localhost:3000');

const message = document.getElementById('msg').innerHTML;

const handleMessage = () => {
  console.log('message.value', message);
  socket.emit('msgToServer', {
    data: { message, id: Math.floor(Math.random() * 100) },
  });
};

socket.on('msgToClient', (data) => {
  console.log('msgToClient', data);
});
