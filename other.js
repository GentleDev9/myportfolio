
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollBtn";
scrollBtn.innerText = "⬆ Top";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  observer.observe(card);
});


