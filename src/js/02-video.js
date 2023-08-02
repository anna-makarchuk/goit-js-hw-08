import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
console.log(iframe);
const player = new VimeoPlayer (iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

function timeKey (data) {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
};


player.on('timeupdate',throttle(timeKey,1000));

const currentTimeValue = localStorage.getItem(CURRENT_TIME_KEY) || 0;
player.setCurrentTime(currentTimeValue);