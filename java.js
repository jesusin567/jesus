// JavaScript para la búsqueda y botones
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Buscando: ${query}`);
    }
});

document.querySelectorAll('.platforms button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#ff9800';
        setTimeout(() => {
            button.style.backgroundColor = '#4CAF50';
        }, 300);
    });
});
