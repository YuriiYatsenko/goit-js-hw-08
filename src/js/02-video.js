import Player from '@vimeo/player';

import throttle from 'lodash/throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, String(seconds));
}

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem(CURRENT_TIME);

  if (!savedTime) {

    return;
  }
  const time = Number(savedTime);

  player.setCurrentTime(time);
}
