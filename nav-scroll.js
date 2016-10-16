(function () {
          var shiftWindow = function() { scrollBy(0, -90)};
          var hash = location.hash;
          var id = hash.substr(1);
          var section = document.getElementById(id);
          var offset = 90;

          if(section) {
          setTimeout(function () {
              console.log('scrollTo:', section.offsetTop - offset);
              window.scrollTo(0, section.offsetTop - offset);
          }, 500);
          }
            
         // Call the shiftWindow whenever we click on a nav-link
          var navLinks = document.querySelectorAll('a.nav-link.toplinks, #index_cta, #downarrow');

          for (var i = 0; i < navLinks.length; i ++) {
               navLinks[i].addEventListener('click', function () {
              setTimeout(shiftWindow, 100);
          });
          }
            
})();