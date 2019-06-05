// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const VC = {
  videoControl() {
    $('[class*=__video-control]').on('click', (e) => {
      const target = $(e.target);
      const video = target.prev('video');

      if (video[0].paused) {
        target.children('span').text('Pause').addClass('video-pause').removeClass('video-play');
        video[0].play();
      } else {
        target.children('span').text('Play').addClass('video-play').removeClass('video-pause');
        video[0].pause();
      }
    });
  },
};

export default VC;
