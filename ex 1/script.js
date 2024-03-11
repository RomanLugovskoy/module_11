	const button = document.getElementById('iconBtn');
    const icon = document.querySelector('.btn__icon');

    button.addEventListener('click', function() {
        icon.classList.toggle('icon_01');
    });