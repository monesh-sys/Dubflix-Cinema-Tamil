const movies = [
{
    title: "Summer House",
    category: "romantic",
    image: "posters/summerhouse.jpg",
    link: "https://drive.google.com/file/d/1U098Pq4C2jr3ZbXe122BSjBR7JQSayHk/view?usp=drive_link"
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
const container = document.getElementById("movieContainer");

movies.forEach(movie => {
    container.innerHTML += `
        <div class="movie-card">
            <a href="${movie.link}" target="_blank">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
        </div>
    `;
});
