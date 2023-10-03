const reviews = [
    {
        name: "John Doe",
        image: "reviewer1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Jane Smith",
        image: "reviewer2.jpg",
        text: "Nulla quis lorem ut libero malesuada feugiat."
    },
    {
        name: "Bob Johnson",
        image: "reviewer3.jpg",
        text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    }
];

let currentIndex = 0;
const card = document.querySelector('.review-card');

function showNextReview() {
    card.classList.remove('show');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % reviews.length;
        const currentReview = reviews[currentIndex];
        document.querySelector('.review-card img').src = currentReview.image;
        document.querySelector('.review-card h5').textContent = currentReview.name;
        document.querySelector('.review-card p').textContent = currentReview.text;
        card.classList.add('show');
    }, 500);
}

// Initial display
showNextReview();

// Automatically change reviews every 5 seconds
setInterval(showNextReview, 5000);