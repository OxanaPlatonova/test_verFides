// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const NT = {
  navToggle() {
    $('#navToggle').on('click', (e) => {
      const target = $(e.target);
      target.toggleClass('active');
      target.closest('.header').toggleClass('opened-nav');
    });
  },
};

export default NT;
