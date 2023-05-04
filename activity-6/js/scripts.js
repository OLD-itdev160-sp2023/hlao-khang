// Array to store messages
var messages = [];

// Message type lookup object, works like enum
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

// seed data
var data = [
  {
    type: messageType.out,
    user: 'Mike',
    message: 'Hey have you had lunch?'
  },
  {
    type: messageType.in,
    user: 'Joe',
    message: 'Not yet. Did you want to eat together?'
  },
  {
    type: messageType.out,
    user: 'Mike',
    message: 'Sure! Are you fine with Donkey Kings?'
  }
];

// message constructor function
function Message(type, user, message){
  this.type = type;
  this.user = user;
  this.message = message;
}

// creates message
function createMessageElement(message){
  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  // create element and add message text
  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  messageEl.className = message.type;

  return messageEl;
}

// Search bar click event handler
function searchbar(event){
  document.getElementById('search-friends').defaultValue = '';
}

var joe = 0;
function search(event){
  if(document.getElementById('joe') !== null)
    document.getElementById('joe').remove();

  var onlyHaveJoe = document.createElement('div');
  onlyHaveJoe.textContent = 'You only have Joe';
  onlyHaveJoe.id = 'joe';

  if(joe > 7)
    onlyHaveJoe.style.color = 'red';

  document.getElementById('friend-list').appendChild(onlyHaveJoe);
  ++joe;
}

// Button click event handler to add new message
function addMessageHandler(event){
  var user, type;
  var messageInput = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  // determine message type and set message variables accordingly
  switch(event.target.id){
    case 'send-button':
      user = 'Mike';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Joe';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
  }

  // creates new message
  if (messageInput.value != ''){
    // construct message and add it to the messages array
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    // create a message element
    var el  = createMessageElement(message);

    // add message to DOM
    messageContainerEl.appendChild(el);

    // reset input
    messageInput.value = '';
  }
}

function loadSeedData() {
  // loads in saved data into messages array
  for(var i = 0; i < data.length; ++i){
    var message = new Message(data[i].type, data[i].user, data[i].message);
    messages.push(message);
  }

  // load message array data onto the screen
  var messageContainerEl = document.getElementById('message-container');

  for(var i = 0; i < messages.length; ++i){
    var message = messages[i];
    var el = createMessageElement(message);

    messageContainerEl.appendChild(el);
  }
}

var init = function() {
  // wire event handlers
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;
  document.getElementById('search-friends').onclick = searchbar;
  document.getElementById('search').onclick = search;

  // loads saved/previous data
  loadSeedData();
};

init();