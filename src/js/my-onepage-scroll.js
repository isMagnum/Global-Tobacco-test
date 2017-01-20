$("#main").onepage_scroll({
       sectionContainer: ".scroll-section",
       easing: "ease",
       animationTime: 800,
       pagination: false,
       updateURL: false,
       beforeMove: function(index) {},
       afterMove: function(index) {},
       loop: false,
       keyboard: true,
       responsiveFallback: false,
       direction: "vertical"
    });