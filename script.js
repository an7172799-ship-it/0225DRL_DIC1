function updateClock() {
    const now = new Date();
    
    // Formatting Time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');

    document.getElementById('clock').textContent = `${formattedHours}:${minutes}:${seconds}`;
    document.getElementById('ampm').textContent = ampm;

    // Formatting Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Simple interaction effect
document.querySelector('.glass-container').addEventListener('mousemove', (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    container.style.setProperty('--mouse-x', `${x}px`);
    container.style.setProperty('--mouse-y', `${y}px`);
});
