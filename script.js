// ==============================
// Movie Data
// ==============================
const movies = [
    {
        title: "Sing Geetham",
        category: "Comedy",
        image: "images/sing geetham.jpg",
        link: "https://drive.google.com/file/d/1p21WyRywjewLTrfl64b2Bnm815lEiYcY/view?usp=sharing",
        date: "03 August 2026"
    }
];

card.innerHTML = `
    <div class="movie-image">
        <img src="${movie.image}" alt="${movie.title}">

        <div class="movie-overlay">
            <div class="play-button">▶</div>
            <h2>Watch Now</h2>
        </div>
    </div>

    <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.category}</p>

        <div class="movie-date">
            📅 Added: ${movie.date}
        </div>
    </div>
`;
// ==============================
// Get Elements
// ==============================
const container = document.getElementById("movieContainer");
const searchBox = document.getElementById("searchBox");

// ==============================
// Display Movies
// ==============================
function displayMovies(movieList) {

    if (!container) return;

    container.innerHTML = "";

    if (movieList.length === 0) {
        container.innerHTML = `
            <div class="no-movie">
                <h2>🎬 No Movies Found</h2>
            </div>
        `;
        return;
    }

    movieList.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";
        card.setAttribute("data-category", movie.category.toLowerCase());

        card.innerHTML = `
            <div class="movie-image">

                <img src="${movie.image}" alt="${movie.title}">

                <div class="movie-overlay">
                    <div class="play-button">
                        ▶
                    </div>

                    <h2>Watch Now</h2>
                </div>

            </div>

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.category}</p>
            </div>
        `;

        // Entire card clickable
        card.addEventListener("click", () => {
            watchMovie(movie.title, movie.link);
        });

        container.appendChild(card);

    });

}

displayMovies(movies);

// ==============================
// Watch Movie
// ==============================
function watchMovie(title, link) {

    localStorage.setItem(
        "selectedMovie",
        JSON.stringify({
            title: title,
            link: link
        })
    );

    window.location.href = "watch.html";

}

// ==============================
// Search Movies
// ==============================
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

// ==============================
// Filter Movies
// ==============================
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

// ==============================
// Sidebar
// ==============================
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

// ==============================
// Search Box Animation
// ==============================
function toggleSearch() {

    const box = document.getElementById("searchBox");

    if (!box) return;

    box.classList.toggle("active");

    if (box.classList.contains("active")) {
        box.focus();
    }

}

// ==============================
// Open Page
// ==============================
function openPage(page) {

    window.location.href = page;

}

// ==============================
// Close Sidebar Outside Click
// ==============================
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

// ==============================
// Scroll To Top Button
// ==============================
window.addEventListener("scroll", () => {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    if (window.scrollY > 250) {
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

// Show popup after page loads
window.addEventListener("load", () => {

    const popup = document.getElementById("noticePopup");

    // Show only once per browser session
    if(sessionStorage.getItem("noticeClosed")){
        popup.style.display = "none";
    }

});

// Close popup
function closeNotice(){

    document.getElementById("noticePopup").style.display = "none";

    sessionStorage.setItem("noticeClosed","true");

}
