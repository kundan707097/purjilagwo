$(document).ready(function() {
    const owl = $("#slider-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 10,
      dots: true,
      itemsDesktop: [1200, 5],
      itemsDesktopSmall: [991, 3],
      itemsTablet: [600, 2],
      itemsMobile: false,
      //pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        991: {
          items: 3
        },
        1200: {
          items: 5
        }
      }
    }); 
    
    const appointment = $("#slider-appointment");
    appointment.owlCarousel({
      items: 4,
      margin: 15,
      dots: true,
      itemsDesktop: [1000, 5],
      itemsDesktopSmall: [900, 2],
      itemsTablet: [600, 1],
      itemsMobile: false,
      //pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        991: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    }); 
  
    // Back to Top button
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    const goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  
    // Autocomplete
    const availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
  
    $("#tags").autocomplete({
      source: availableTags
    });
  });