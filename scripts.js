document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Achievements slider functionality
    const achievementsContainer = document.querySelector('.achievement-container');
    const achievements = document.querySelectorAll('.achievement');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function updateAchievements() {
        achievementsContainer.style.transform = `translateX(-${currentIndex * 200}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateAchievements();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < achievements.length - 1) {
            currentIndex++;
            updateAchievements();
        }
    });

    // Initialize the display
    updateAchievements();
});
