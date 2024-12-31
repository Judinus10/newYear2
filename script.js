// script.js
document.getElementById('surprise-btn').addEventListener('click', () => {
    // Show the surprise message
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');

    // Create fireworks effect
    const fireworksContainer = document.getElementById('fireworks-container');
    fireworksContainer.style.display = 'block';

    // Create firework particles
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        // Randomize position and direction
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.animationDelay = Math.random() * 0.5 + 's'; // delay each firework slightly
        firework.style.animation = `rise 1.5s forwards`;

        // Append the firework to the container
        fireworksContainer.appendChild(firework);

        // Remove the firework after the animation ends
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
});
