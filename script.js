function switchTab(id, btn) {
    document.querySelectorAll('.list-container').forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('tab-title').innerText = btn.innerText;
}