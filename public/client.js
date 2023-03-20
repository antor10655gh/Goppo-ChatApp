const socket = io();

let name;
let textarea = document.querySelector('$textarea');
do {
  name = prompt('Please enter your name?');
} while (!name);

textarea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    sendMessage(e.target.value);
  }
});

function sendMessage(message) {
  let msg = {
    user: name,
    message: msg
  };
  // Append message to DOM
  appendMessage(msg, 'outgoing');
}

function appendMessage(msg, type) {
  let messageArea = document.querySelector('.message-wrapper');
  let newDiv = document.createElement('div');
  let className = type;
  newDiv.classList.add(className, 'message');
  let markup = `<h4>${msg.user}</h4><p>${msg.message}</p>`;
  newDiv.innerHTML = markup;
  messageArea.appendChild(newDiv);
}
