const params = new URLSearchParams(window.location.search);
const videoUrl = params.get("video");
const title = params.get("title");

const player = document.getElementById("player");
const movieTitle = document.getElementById("movie-title");

player.src = videoUrl;
movieTitle.innerText = title;
