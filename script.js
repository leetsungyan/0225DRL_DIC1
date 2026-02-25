function updateClock() {
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    const now = new Date();

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Format date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Add a subtle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
