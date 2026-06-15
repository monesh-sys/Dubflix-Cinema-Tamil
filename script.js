const movies = [
{
    title: "Summer House 2025 | Full Movie in Tamil",
    poster: "images/Summer House.jpg",
    video: "movies/Summer House.mp4",
    category: "romantic"
},
{
    title: "Movie 2",
    poster: "images/poster2.jpg",
    video: "movies/movie2.mp4",
    category: "cartoon"
},
{
    title: "Movie 3",
    poster: "images/poster3.jpg",
    video: "movies/movie3.mp4",
    category: "comedy"
},
{
    title: "Movie 4",
    poster: "images/poster4.jpg",
    video: "movies/movie4.mp4",
    category: "action"
},
{
    title: "Movie 5",
    poster: "images/poster5.jpg",
    video: "movies/movie5.mp4",
    category: "horror"
},
{
    title: "Movie 6",
    poster: "images/poster6.jpg",
    video: "movies/movie6.mp4",
    category: "horror"
},
{
    title: "Movie 7",
    poster: "images/poster7.jpg",
    video: "movies/movie7.mp4",
    category: "adventure"
}
];

const container = document.getElementById("movieContainer");

movies.forEach(movie => {

    const card = document.createElement("div");
    card.className = "movie-card";

    card.setAttribute("data-category", movie.category);

    card.innerHTML = `
        <img src="${movie.poster}">
        <h3>${movie.title}</h3>
        <button onclick="watchMovie('${movie.title}','${movie.video}')">
            Watch Now
        </button>
    `;

    document.getElementById("movieContainer").appendChild(card);
});

function watchMovie(title, video){

    localStorage.setItem(
        "selectedMovie",
        JSON.stringify({
            title:title,
            video:video
        })
    );

    window.location.href = "watch.html";
}
function toggleSidebar(){
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".content");

    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hide");
    content.classList.toggle("full");
}
function toggleSearch(){
    const box = document.getElementById("searchBox");
    box.classList.toggle("active");

    if(box.classList.contains("active")){
        box.focus();
    }
}
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();
    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
function filterMovies(category){

    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(movie => {

        let type = movie.getAttribute("data-category");

        if(category === "all"){
            movie.style.display = "block";
        }
        else if(type === category){
            movie.style.display = "block";
        }
        else{
            movie.style.display = "none";
        }

    });

}
function openPage(page){
    window.location.href = page;
}