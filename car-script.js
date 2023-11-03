let teamItems = document.querySelectorAll('#teamCarousel .carousel-item')

teamItems.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // Wrap carousel by using the first child
            next = teamItems[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let recipeItems = document.querySelectorAll('#recipeCarousel .carousel-item')

recipeItems.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // Wrap carousel by using the first child
            next = recipeItems[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
$(document).ready(function () {
    // Initialize the carousel
    $('#teamCarousel').carousel();

    // Go to the previous slide when clicking the custom previous icon
    $('.custom-icon-prev').click(function () {
      $('#teamCarousel').carousel('prev');
    });

    // Go to the next slide when clicking the custom next icon
    $('.custom-icon-next').click(function () {
      $('#teamCarousel').carousel('next');
    });
  });

  $(document).ready(function () {
    // Initialize the testimonial carousel
    $('#recipeCarousel').carousel();

    // Go to the previous slide when clicking the custom previous icon
    $('.testimonial-custom-icon-prev').click(function () {
      $('#recipeCarousel').carousel('prev');
    });

    // Go to the next slide when clicking the custom next icon
    $('.testimonial-custom-icon-next').click(function () {
      $('#recipeCarousel').carousel('next');
    });
});
