const navSlide = () => {
  const burger = document.querySelector(".burger");
  const dropdowm = document.querySelector(".dropdown");
  const links = document.querySelectorAll(".dropdown button");

  burger.addEventListener("click", () => {
    dropdowm.classList.toggle("dropdown-active");

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkfade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

const nav = document.querySelector(".ovf");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    nav.classList.add("nav-bg");
  } else nav.classList.remove("nav-bg");
});
