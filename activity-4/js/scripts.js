// welcome message
var user = 'Hlao';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest reviews';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 15;
var studentDiscount = .15;
var studentPrice = price * (1 - studentDiscount);
var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);