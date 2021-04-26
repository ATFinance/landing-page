/* Set to do semething based on scroll */
class Scroll {
  static init() {
    $(window).scroll(function () {
      // $('nav').toggleClass('active', $(this).scrollTop() > 50);
    });

    // handle links with @href started with '#' only
    $(document).on("click", 'a[href^="#"]', function (e) {
      // target element id
      var id = $(this).attr("href");

      // target element
      var $id = $(id);
      if ($id.length === 0) {
        return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $id.offset().top;

      // animated top scrolling
      $("body, html").animate({ scrollTop: pos });
    });
  }
}

export default Scroll;
