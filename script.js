const movies = [
{
    title: "Kuberaa",
    category: "thriller,action",
    image: "images/Kubaraa.png",
    link: "https://drive.google.com/file/d/1U098Pq4C2jr3ZbXe122BSjBR7JQSayHk/view?usp=sharing"
},
{
    title: "Dawood",
    category: "comedy,thriller",
    image: "images/dawood.png",
    link: "https://drive.google.com/file/d/1g3En2LlxsO6h4bGPw6uKlpCs2iqjoow2/view?usp=sharing"
}
];

// Movie Container
const container = document.getElementById("movieContainer");

// Create Movie Cards
movies.forEach(movie => {

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

// Watch Movie
function watchMovie(title, video) {

    localStorage.setItem(
        "selectedMovie",
        JSON.stringify({
            title: title,
            link: video
        })
    );

    if (video && !video.endsWith(".mp4")) {
        window.open(video, "_blank");
        return;
    }

    window.location.href = "watch.html";
}

// Sidebar Toggle
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

// Search Box Toggle
function toggleSearch() {

    const box = document.getElementById("searchBox");

    if (!box) return;

    box.classList.toggle("active");

    if (box.classList.contains("active")) {
        box.focus();
    }
}

// Search Movies
const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const movieCards = document.querySelectorAll(".movie-card");

        movieCards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// Filter Movies by Category
function filterMovies(category) {

    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(movie => {

        const type = movie.getAttribute("data-category").toLowerCase();

        if (category === "all") {
            movie.style.display = "block";
        }
        else if (type.includes(category.toLowerCase())) {
            movie.style.display = "block";
        }
        else {
            movie.style.display = "none";
        }

    });

}

// Open Any Page
function openPage(page) {
    window.location.href = page;
}

// Close Sidebar When Clicking Outside
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
