document.getElementById('sizeButton').addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    alert(`Ширина экрана: ${screenWidth}px\nВысота экрана: ${screenHeight}px`);
});