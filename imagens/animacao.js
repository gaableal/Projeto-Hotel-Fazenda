document.getElementById('reserve-btn').addEventListener('click', function() {
    const fireworks = document.querySelector('.fireworks');
    fireworks.style.opacity = '1';

    setTimeout(function() {
        fireworks.style.opacity = '0';
    }, 2000);

    setTimeout(function() {
        const confirmationMessage = document.getElementById('reservation-confirmation');
        confirmationMessage.classList.remove('hidden');
    }, 2500);
});
