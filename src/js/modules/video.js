const videoControl = {
  videoControl() {
    const playButton = $('#play-button');
    const pauseButton = $('#pause-button');
    let player;
    window.onYouTubePlayerAPIReady = () => {
      player = new YT.Player('video', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onStateChange
        }
      });
    }

    function onPlayerReady() {
      playButton.on('click', () => {
        player.playVideo();
        playButton.hide();
        pauseButton.show();
      });
      pauseButton.on('click', () => {
        player.pauseVideo();
        playButton.show();
        pauseButton.hide();
      });
    }
    function onStateChange(event) {
      if(event.data === 0) {
        player.playVideo();
      } else if (event.data === 1) {
        playButton.hide();
        pauseButton.show();
      } else if (event.data === 2) {
        playButton.show();
        pauseButton.hide();
      }
    }
  },
};

export default videoControl;
