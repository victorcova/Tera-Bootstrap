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