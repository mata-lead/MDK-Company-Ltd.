let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Hide slides using opacity
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to the first slide
  }

  slides[slideIndex - 1].style.opacity = 1; // Show the current slide

  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  // Show the selected slide
  slides[slideIndex - 1].style.opacity = 1;
}

// Initialize the slider
showSlides();
