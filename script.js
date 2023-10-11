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
      console.log("DOMContentLoaded event fired");
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

    //form placeholder hiding
    inputField = document.getElementById('fullName');
    function hidePh(){
      console.log("clicked");
      let ph1 = document.getElementById('ph1');
      ph1.style.display = "none";
    }
    

   
