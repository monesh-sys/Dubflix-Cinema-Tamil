const movie = JSON.parse(localStorage.getItem("selectedMovie"));

if(movie){

    document.getElementById("movieTitle").textContent = movie.title;

    document.getElementById("moviePoster").src = movie.image || "images/default.jpg";

    document.getElementById("watchBtn").onclick = function(){
        window.open(movie.link, "_blank");
    };

}
