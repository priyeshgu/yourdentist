// Function to rotate reviews
function rotateReviews() {
    const reviews = document.querySelectorAll('.review');
    const activeReview = document.querySelector('.review.active');

    // Hide the current active review
    if (activeReview) {
        activeReview.style.display = 'none';
        activeReview.classList.remove('active');
    }

    // Get the next review or loop back to the first review
    const nextReview = activeReview ? activeReview.nextElementSibling : reviews[0];
    
    // Display the next review and add the 'active' class
    if (nextReview) {
        nextReview.style.display = 'block';
        nextReview.classList.add('active');
    } else {
        reviews[0].style.display = 'block';
        reviews[0].classList.add('active');
    }
}

// Rotate reviews every 5 seconds (adjust as needed)
setInterval(rotateReviews, 5000);

// Initial display of the first review


const initialReview = document.querySelector('.review');
if (initialReview) {
    initialReview.style.display = 'block';
    initialReview.classList.add('active');
}
const initialBlogs = document.querySelector('.blog-card');
if (initialReview) {
    initialReview.style.display = 'block';
    initialReview.classList.add('active');
}

const toggleButton = document.getElementById('toggleServices');

  toggleButton.addEventListener('click', function () {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      toggleButton.textContent = 'View Less';
    } else {
      toggleButton.textContent = 'View More';
    }
  });

 

const blogServices = document.getElementById('blogServices');

blogServices.addEventListener('click', function () {
    const isExpanded = blogServices.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      blogServices.textContent = 'View Less';
    } else {
      blogServices.textContent = 'View More';
    }
  });

   //script for slider 
   let specialistsCarousel1; // Declare the variable here

    document.addEventListener("DOMContentLoaded", function() {
        specialistsCarousel1 = new bootstrap.Carousel(document.getElementById('specialistsCarousel1'), {
            interval: false // Disable automatic sliding
        });
    });
    

    function nextCard() {
        specialistsCarousel1.next();
    }

    function prevCard() {
        specialistsCarousel1.prev();
    }

    //slider for testimonials
    let testimonialCarousel; // Declare the variable here
    testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'),{
      interval: false // Disable automatic sliding
    });
    function nextCard1(){
      testimonialCarousel.next();
    }
    function prevCard1(){
      testimonialCarousel.prev();
    }

   
    // icon show hide code
// Get all elements with the class 'form-text-input'
const inputFields = document.querySelectorAll('.form-text-input');

inputFields.forEach(inputField => {
  const icon = inputField.nextElementSibling;
  let isPlaceholderHidden = false;

  inputField.addEventListener('input', () => {
    if (inputField.value.trim() === '') {
      icon.style.display = 'block';
      isPlaceholderHidden = false;
    } else {
      icon.style.display = 'none';
      isPlaceholderHidden = true;
    }
  });

  // Initial check when the page loads
  if (inputField.value.trim() !== '') {
    icon.style.display = 'none';
    isPlaceholderHidden = true;
  } else {
    icon.style.display = 'block';
    isPlaceholderHidden = false;
  }

  inputField.addEventListener('blur', () => {
    if (inputField.value.trim() === '') {
      icon.style.display = 'block';
      isPlaceholderHidden = false;
    }
  });
});
// Get all accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button');
// Get all hr elements
const hrElements = document.querySelectorAll('.hrContainer hr');

// Create an array to keep track of the expanded items
const expandedItems = new Array(accordionButtons.length).fill(false);

// Add a click event listener to each accordion button
accordionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // If the accordion item is expanded, hide the hr element
    if (isExpanded) {
      hrElements[index].style.display = 'none';
    } else {
      // If the accordion item is collapsed, show the hr element
      hrElements[index].style.display = 'block';
    }

    // Update the expanded items array
    expandedItems[index] = isExpanded;

    // Show horizontal lines for collapsed items
    for (let i = 0; i < expandedItems.length; i++) {
      if (!expandedItems[i]) {
        hrElements[i].style.display = 'block';
      }
    }
  });
});
