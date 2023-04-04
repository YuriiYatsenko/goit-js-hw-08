const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const updateLocalStorage = throttle(() => {
  const state = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

const savedState = localStorage.getItem(STORAGE_KEY);
if (savedState) {
  const state = JSON.parse(savedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

form.addEventListener('input', updateLocalStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  localStorage.clear();

  emailInput.value = '';
  messageInput.value = '';

  console.log({ email: emailValue, message: messageValue });
});