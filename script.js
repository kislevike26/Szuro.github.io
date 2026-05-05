document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const name = "Készítette: Szuróczki Levente"; // Új név beállítva
    let i = 0;

    function type() {
        if (i < name.length) {
            textElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(type, 80); // Kicsit gyorsabb, folyamatosabb gépelés
        }
    }
    
    // Rövid késleltetés az indulás előtt a kártya animációja miatt
    setTimeout(type, 800);
});