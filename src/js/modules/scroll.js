// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const scrollBottom = {
  scroll() {
    $('.btn-scroll').on('click', (e) => {
      e.preventDefault();
      const target = $(e.target);
      $('html, body').animate({ scrollTop: $(target.attr('href')).offset().top }, 500, 'linear');
    });
  },
};

export default scrollBottom;
