const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");

searchInput.addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();

  videoCards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
