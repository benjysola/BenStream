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
function sanitizeInput(input) {
  const pattern = /^[a-zA-Z0-9\s]+$/; 
  return pattern.test(input);
}

function handleSearch() {
  const userInput = document.getElementById("searchBar").value;

  if (sanitizeInput(userInput)) {
    console.log("Search input is valid: " + userInput);
  
  } else {
    alert("Invalid search input detected. Please use only letters and numbers.");
  }
}
