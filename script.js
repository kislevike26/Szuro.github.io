document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const name = "RESPECT + SZURÓCZKI LEVENTE"; // GTA-s utalással :)
    let i = 0;

    function type() {
        if (i < name.length) {
            textElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    // Egy kis késleltetés, hogy a háttér beússzon
    setTimeout(type, 1000);
});