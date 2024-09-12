/* This is for gallery images slide */
let slideIndex = [1, 1, 1];
let slideId = ["mySlides1", "mySlides2","mySlides3"];
let dotContainers = document.getElementsByClassName("dot-container");

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = dotContainers[no].getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}