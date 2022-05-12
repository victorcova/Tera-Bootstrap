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

//testimonials

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