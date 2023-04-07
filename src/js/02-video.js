import Player from '@vimeo/player';
// імпортуємо клас Player з бібліотеки Vimeo

import throttle from 'lodash/throttle';
// імпортуємо функцію throttle з бібліотеки Lodash

const CURRENT_TIME = 'videoplayer-current-time';
// створюємо константу для зберігання ключа в локальному сховищі

const iframe = document.querySelector('iframe');
// знаходимо iframe елемент на сторінці

const player = new Player(iframe);
// ініціалізуємо плеєр з використанням iframe

player.on('timeupdate', throttle(onPlay, 1000));
// відстежуємо подію timeupdate з використанням функції throttle, яка обмежує частоту виклику функції onPlay до одного разу на секунду

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, String(seconds));
  // зберігаємо час відтворення відео у локальному сховищі
}

setCurrentTime();
// викликаємо функцію для встановлення часу відтворення збереженого у локальному сховищі

function setCurrentTime() {
  const savedTime = localStorage.getItem(CURRENT_TIME);
  // отримуємо час відтворення збережений у локальному сховищі

  if (!savedTime) {
    // перевіряємо чи є збережений час відтворення в локальному сховищі

    return;
    // якщо ні, виходимо з функції
  }
  const time = Number(savedTime);
  // перетворюємо збережений час відтворення у число

  player.setCurrentTime(time);
  // встановлюємо час відтворення відео на плеєрі
}
