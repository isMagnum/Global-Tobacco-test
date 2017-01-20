$(function() {
  $.scrollify({
    section : ".scroll-section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 900,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
  });
  
  $(".scroll").click(function(e) {
    e.preventDefault();
    $.scrollify.next();
  });
});
