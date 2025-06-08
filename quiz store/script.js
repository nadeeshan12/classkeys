const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});

function filterTag(tag) {
  cards.forEach(card => {
    const tags = card.getAttribute("data-tags");
    card.style.display = tags.includes(tag) ? "block" : "none";
  });
}
