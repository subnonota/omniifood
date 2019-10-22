$(document).ready(function() {
  /*--- STICKY NAV ---*/
  new Waypoint({
    element: document.querySelector(".js-section-feature"),
    handler: function(direction) {
      var nav = document.querySelector("nav");
      if (direction === "down") {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    },
    offset: 60
  });

  /*--- SCROLL ON BUTTON ---*/
  $(".js-scroll-to-plans").click(function() {
    var plans = $(".js-section-plans").offset().top;
    $("html, body").animate({ scrollTop: plans }, 1000);
  });

  $(".js-scroll-to-feature").click(function() {
    var feature = $(".js-section-feature").offset().top;
    $("html, body").animate({ scrollTop: feature }, 1000);
  });

  /*--- SCROLL ON NAV BUTTON ---*/
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
        }
      }
    });

  /*--- ANIMATION ON SCROLL ---*/

  var values = {
    target: [],
    classes: ["animated", "fadeIn", "fadeInUp", "pulse"]
  };

  for (var i = 0; i < 4; i++) {
    var elem = document.querySelector(`.js-wp-${i + 1}`);
    values.target.push(elem);
  }

  new Waypoint({
    element: values.target[0],
    handler: function() {
      values.target[0].classList.add(values.classes[0], values.classes[1]);
    },
    offset: "50%"
  });

  new Waypoint({
    element: values.target[1],
    handler: function() {
      values.target[1].classList.add(values.classes[0], values.classes[2]);
    },
    offset: "50%"
  });

  new Waypoint({
    element: values.target[2],
    handler: function() {
      values.target[2].classList.add(values.classes[0], values.classes[2]);
    },
    offset: "50%"
  });

  new Waypoint({
    element: values.target[3],
    handler: function() {
      values.target[3].classList.add(values.classes[0], values.classes[3]);
    },
    offset: "50%"
  });

  document
    .querySelector(".js-mobile-nav-icon")
    .addEventListener("click", function() {
      var nav = document.querySelector(".js-main-nav");
      var icon = document.querySelector(".js-mobile-nav-icon ion-icon");

      if (nav.classList.contains("close-nav")) {
        nav.classList.remove("close-nav");
        nav.classList.add("open-nav");
        icon.setAttribute("name", "close");
      } else {
        nav.classList.remove("open-nav");
        nav.classList.add("close-nav");
        icon.setAttribute("name", "menu");
      }
    });
});
