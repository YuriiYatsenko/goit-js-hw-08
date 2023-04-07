// Цей рядок коду імпортує функцію throttle з бібліотеки Lodash.
const throttle = require('lodash.throttle');

// Отримуємо елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Ключ для зберігання даних в локальному сховищі
const STORAGE_KEY = 'feedback-form-state';

// Оновлення даних у локальному сховищі з використанням lodash.throttle
const updateLocalStorage = throttle(() => {
  const state = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

// Перевірка наявності даних у локальному сховищі і їх відновлення
const savedState = localStorage.getItem(STORAGE_KEY);
if (savedState) {
  const state = JSON.parse(savedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

// Збереження даних у локальному сховищі при вводі тексту в поля форми
form.addEventListener('input', updateLocalStorage);

// Очищення даних у локальному сховищі та формі при сабміті форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Отримати значення з полів форми перед очищенням сховища
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  // Очистити сховище
  localStorage.clear();

  // Очистити поля форми
  emailInput.value = '';
  messageInput.value = '';

  // Вивести об'єкт з полями email та message і їхніми значеннями в консоль
  console.log({ email: emailValue, message: messageValue });
});