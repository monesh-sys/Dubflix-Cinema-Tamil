// =========================
// Movie List
// =========================
const movies = [
    {
        title: "Sing Geetham",
        category: "comedy",
        image: "images/sing geetham.webp",
        link: "https://drive.google.com/file/d/1p21WyRywjewLTrfl64b2Bnm815lEiYcY/view?usp=sharing"
    }
];

// =========================
// Movie Container
// =========================
const container = document.getElementById("movieContainer");

// Create "No Movies Found" message
const noMovie = document.createElement("h2");
noMovie.id = "noMovie";
noMovie.innerText = "No Movies Found";
noMovie.style.textAlign = "center";
noMovie.style.display = "none";
noMovie.style.marginTop = "30px";

if (container) {
    container.after(noMovie);
}

// =========================
// Display Movies
// =========================
function displayMovies(movieList) {

    if (!container) return;

    container.innerHTML = "";

    if (movieList.length === 0) {
        noMovie.style.display = "block";
        return;
    }

    noMovie.style.display = "none";

    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";
        card.setAttribute("data-category", movie.category);

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button onclick="watchMovie('${movie.title}','${movie.link}')">
                Watch Now
            </button>
        `;

        container.appendChild(card);

    });

}

displayMovies(movies);

// =========================
// Watch Movie
// =========================
function watchMovie(title, video) {

    localStorage.setItem("selectedMovie", JSON.stringify({
        title: title,
        link: video
    }));

    window.location.href = "watch.html";

}

// =========================
// Sidebar Toggle
// =========================
function toggleSidebar() {

    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    if (!sidebar) return;

    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hide");

    if (content) {
        content.classList.toggle("full");
    }

}

// =========================
// Search Box Toggle
// =========================
function toggleSearch() {

    const box = document.getElementById("searchBox");

    if (!box) return;

    box.classList.toggle("active");

    if (box.classList.contains("active")) {
        box.focus();
    }

}

// =========================
// Search Movies
// =========================
const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(value) ||
            movie.category.toLowerCase().includes(value)
        );

        displayMovies(filtered);

    });

}

// =========================
// Filter Movies
// =========================
function filterMovies(category) {

    if (category === "all") {
        displayMovies(movies);
        return;
    }

    const filtered = movies.filter(movie =>
        movie.category.toLowerCase() === category.toLowerCase()
    );

    displayMovies(filtered);

}

// =========================
// Open Page
// =========================
function openPage(page) {
    window.location.href = page;
}

// =========================
// Close Sidebar
// =========================
document.addEventListener("click", function (e) {

    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    if (!sidebar || !menuBtn) return;

    if (
        sidebar.classList.contains("show") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("show");
        sidebar.classList.add("hide");
    }

});

// =========================
// Scroll to Top Button
// =========================
window.addEventListener("scroll", function () {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function scrollTopPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
