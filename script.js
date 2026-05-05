document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    // A neved helyett most ezt írja ki középen
    const title = "SZAKMAI PORTFÓLIÓ"; 
    let i = 0;

    function type() {
        if (i < title.length) {
            textElement.innerHTML += title.charAt(i);
            i++;
            setTimeout(type, 120);
        }
    }
    
    setTimeout(type, 800);
});