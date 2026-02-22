// Search Functionality
function searchMovie() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();
    const movies = document.querySelectorAll('.movie-card');
    movies.forEach(movie => {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchBox)) {
            movie.style.display = 'block'; // عرض الفيلم
        } else {
            movie.style.display = 'none'; // إخفاء الفيلم
        }
    });
}