// parallax effect

const parallax = document.getElementById("parallax");

if(screen.width >= 1040) {
  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `-${offset * 0.2}px`;
  });
};

// show image and prevent scroll
const images = document.querySelectorAll(".gallery-image");
const imageShow = document.getElementById("imageShow");

images.forEach((image) => {
  image.addEventListener("click", () => {
    imageShow.classList.add("active");
    imageShow.children[0].src = image.src;
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  });
});

const closeImageShow = () => {
  imageShow.classList.remove("active");
  imageShow.children[0].src = "";
  document.body.style.height = "auto";
  document.body.style.overflow = "auto";
};

// toggle mobile menu
const menu =  document.getElementById('mobile-nav');

function toggleMenu() {
  menu.classList.toggle('active');
};

