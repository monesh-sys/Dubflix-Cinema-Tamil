const movies = [
{
    title: "Summer House",
    category: "romantic",
    image: "images/image_2.jpg",
    link: "https://drive.google.com/file/d/1U098Pq4C2jr3ZbXe122BSjBR7JQSayHk/view?usp=sharing"
}
];

const container = document.getElementById("movieContainer");

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

    document.getElementById("movieContainer").appendChild(card);
});

function watchMovie(title, video){

    localStorage.setItem(
        "selectedMovie",
        JSON.stringify({
            title:title,
            link:video
        })
    );

    if (video && !video.endsWith('.mp4')) {
        window.location.href = video;
        return;
    }

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
