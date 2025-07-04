// 
// Clean JavaScript with proper structure
// Fade-in animation and smooth transitions
//
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "image-section"
  const imageSections = document.querySelectorAll(".image-section");
  
  // Add fade-in animation to each image section
  imageSections.forEach(function(section) {
    section.classList.add("fade-in");
  });
  
  // Get all images and add event listener for hover effect
  const images = document.querySelectorAll(".image");
  images.forEach(function(image) {
    image.addEventListener("mouseover", function() {
      image.style.transform = "scale(1.1)";
    });
    image.addEventListener("mouseout", function() {
      image.style.transform = "scale(1)";
    });
  });
});