// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const HS = {
  headerSticky() {
    const headerHeight = $('#header_main').height();
    $(window).scroll((e) => {
      const target = $(e.target);
      if (target.scrollTop() >= headerHeight / 2) {
        $('#header_main').addClass('fixed');
      } else if (target.scrollTop() < 1) {
        $('#header_main').removeClass('fixed');
      }
    });
  },
};

export default HS;
