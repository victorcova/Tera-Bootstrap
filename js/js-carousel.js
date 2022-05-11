var multipleCardCarousel = document.querySelector(
  "#controlesCarousel"
  );

  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $("#controlesCarousel .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition += cardWidth;

  $("#controlesCarousel .carousel-inner").animate(
  { scrollLeft: scrollPosition },
    600
  );}
  });

  $("#controlesCarousel .carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
  scrollPosition -= cardWidth;
  
  $("#controlesCarousel .carousel-inner").animate(
  { scrollLeft: scrollPosition },
    600
  );
  }
  });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }