const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const locationButton = document.getElementById('location-button');

function sendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    const ws = new WebSocket('wss://echo-ws-service.herokuapp.com');
    ws.onopen = () => {
        ws.send(message);
    };
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
});

locationButton.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationUrl = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            const locationLink = document.createElement('a');
            locationLink.href = locationUrl;
            locationLink.textContent = 'Геолокация';
            sendMessage(locationLink.outerHTML);
        }, (error) => {
            console.error('Ошибка получения геолокации:', error);
        });
    } else {
        alert('Геолокация не поддерживается вашим браузером.');
    }
});