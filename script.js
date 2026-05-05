document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const prefix = "Készítette: ";
    const name = "Szuróczki Levente";
    let i = 0;

    // Beállítjuk az alapszöveget, a nevet pedig majd gépeljük
    textElement.innerHTML = prefix + "<b id='name-part'></b>";
    const nameSpan = document.getElementById('name-part');

    function type() {
        if (i < name.length) {
            nameSpan.innerHTML += name.charAt(i);
            i++;
            setTimeout(type, 120);
        }
    }
    
    // Egy kis késleltetés az indítás előtt
    setTimeout(type, 800);
});