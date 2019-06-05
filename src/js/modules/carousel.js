// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const OC = {
  carousel() {
    if ($('.owl-carousel').length > 0) {
      const owl = $('.owl-carousel');
      const itemLength = owl.find('.owl-item').length;
      const owlOptions = {
        loop: true,
        nav: true,
        dots: false,
        items: 4,
        responsive: {
          0: {
            items: itemLength,
          },
          769: {
            items: 3,
          },
          981: {
            items: 4,
          },
        },
      };
      if ($(window).width() > 768) {
        owl.owlCarousel(owlOptions);
      } else {
        owl.trigger('destroy.owl.carousel');
      }
      $(window).resize(() => {
        if ($(window).width() > 768) {
          owl.owlCarousel(owlOptions);
        } else {
          owl.trigger('destroy.owl.carousel');
        }
      });
    }
  },
};

export default OC;
