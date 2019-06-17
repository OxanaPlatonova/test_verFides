const videoBackground = {
  videoBackground() {
    const playButton = $('#play-button');
    const pauseButton = $('#pause-button');
    function playerControl() {
      const playerYt = $('#video').data('ytPlayer').player;
      playerYt.addEventListener('onStateChange', (data) => {
        if (data.data === 1) {
          playButton.hide();
          pauseButton.show();
        } else if (data.data === 2) {
          playButton.show();
          pauseButton.hide();
        }
      });
      playButton.on('click', () => {
        playerYt.playVideo();
      });
      pauseButton.on('click', () => {
        playerYt.pauseVideo();
      });
    }
    $('#video').YTPlayer({
      fitToBackground: true,
      videoId: 'O6CLkUKePm8',
      playerVars: {
        modestbranding: 0,
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        wmode: 'transparent',
        branding: 0,
        rel: 0,
        autohide: 0,
        origin: window.location.origin
      },
      callback: playerControl
    });
  }
};

export default videoBackground;