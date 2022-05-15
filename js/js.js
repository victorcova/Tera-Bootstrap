var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// div resp pesquisa curso
var BTNSearchBuscarCurso = document.getElementById("SearchBuscarCurso");
var tbResultBuscaCursos = document.getElementById("tbResultBuscaCursos");

tbResultBuscaCursos.setAttribute('style','display: none;');

BTNSearchBuscarCurso.addEventListener("click", function() {

  var divTbResultBuscaCursos = document.getElementById("tbResultBuscaCursos");
    
  if(divTbResultBuscaCursos.style.display === "none") {
        divTbResultBuscaCursos.style.display = "block";
    } else {
  	  divTbResultBuscaCursos.style.display = "none";
  }
    
});



// div resp cadastro boletim informativo
var BTNbuttonCadastraInformativos = document.getElementById("buttonCadastraInformativos");
var resultCadastroInformativos = document.getElementById("resultCadastroInformativos");
var cadMailInfos = document.getElementById("cadMailInfos");

resultCadastroInformativos.setAttribute('style','display: none;');

BTNbuttonCadastraInformativos.addEventListener("click", function() {

  var divresultCadastroInformativos = document.getElementById("resultCadastroInformativos");

  if(cadMailInfos.value === ""){
    // alert("Preencha seu e-mail corretamente");
    cadMailInfos.focus();
    divresultCadastroInformativos.style.display = "block";
    divresultCadastroInformativos.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Email não preenchido!`;    
  }else{
    cadMailInfos.value = "";
    cadMailInfos.focus();
    divresultCadastroInformativos.style.display = "block";
    divresultCadastroInformativos.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> E-mail Cadastrado!`;
  }
    
});

//-------------------------------------------------

$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 20,
      center: true,
      nav: false,
      margin: 50,
      dots: true,
      loop: true,
      responsive: {
          0: { items: 1 },
          480: { items: 2 },
          575: { items: 2 },
          768: { items: 2 },
          991: { items: 3 },
          1200: { items: 4 }
      }
  });
});

// HEADER ANIMATION
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// OWL-CARROUSEL
$('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// // SCROLLSPY
// $(document).ready(function() {
//   $(".nav-link").click(function() {
//       var t = $(this).attr("href");
//       $("html, body").animate({
//           scrollTop: $(t).offset().top - 75
//       }, {
//           duration: 1000,
//       });
//       $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
//       return false;
//   });

// });

// // AOS
// AOS.init({
//     offset: 120, 
//     delay: 0,
//     duration: 1200, 
//     easing: 'ease', 
//     once: true, 
//     mirror: false, 
//     anchorPlacement: 'top-bottom', 
//     disable: "mobile"
//   });

// //SIDEBAR-OPEN
//   $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
//     $("body").removeClass("sidebar-open");
//   })

//   $('#navbarSupportedContent').on('shown.bs.collapse', function () {
//     $("body").addClass("sidebar-open");
//   })


//   window.onresize = function() {
//     var w = window.innerWidth;
//     if(w>=992) {
//       $('body').removeClass('sidebar-open');
//       $('#navbarSupportedContent').removeClass('show');
//     }
//   }