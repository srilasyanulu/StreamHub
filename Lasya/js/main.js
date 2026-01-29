// Future enhancements:
// - autoplay control
// - hover previews
// - API integration
console.log("StreamHub Home Loaded");
// NAVIGATION HANDLING
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.dataset.section;

    // Hide all sections
    sections.forEach((sec) => sec.classList.add("hidden"));

    // Home = show hero + videos
    if (sectionId === "home") {
      document.querySelector(".hero").style.display = "block";
      document.querySelector(".video-section").style.display = "block";
    } else {
      document.querySelector(".hero").style.display = "none";
      document.querySelector(".video-section").style.display = "none";
      document.getElementById(sectionId).classList.remove("hidden");
    }
  });
});

// LOGIN STATE (FAKE AUTH USING localStorage)
const authBox = document.querySelector(".auth-buttons");

if (localStorage.getItem("user")) {
  authBox.innerHTML = `
    <span>Welcome, ${localStorage.getItem("user")}</span>
    <button onclick="logout()" class="btn signup">Logout</button>
  `;
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}

// VIDEO INTERACTION
document.querySelectorAll(".video-row video").forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });

  video.addEventListener("click", () => {
    alert("Open full player page (next step 🚀)");
  });
});
// MOVIES SECTION INTERACTION
document.querySelectorAll(".movie-card").forEach((card) => {
  const video = card.querySelector("video");
  const src = card.dataset.video;

  video.src = src;

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  card.addEventListener("click", () => {
    const title = card.querySelector("h4").innerText;
    window.location.href = `player.html?video=${src}&title=${title}`;
  });
});
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", () => {
  const value = searchBox.value.toLowerCase();

  document.querySelectorAll(".movie-card").forEach((card) => {
    const title = card.querySelector("h4").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});
