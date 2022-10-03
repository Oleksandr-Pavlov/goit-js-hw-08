import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

playerSetup();

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

function playerSetup() {
  const currentTime = localStorage.getItem(STORAGE_KEY);

  if (currentTime) {
    player.setCurrentTime(currentTime);
  } else player.setCurrentTime(0);
}
