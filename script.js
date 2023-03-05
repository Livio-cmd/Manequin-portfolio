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

// fading animation on screen enter

const targets = document.querySelectorAll('[data-animation=fade]');
// Select all image container
const galleryContainers = document.querySelectorAll('.img-container');
// Set the delays for each one ( to ne * by 100 )
const delays = [0, 1, 2, 3, 0, 1, 2, 3];
// Apply delay to all containers
galleryContainers.forEach((item, index) => {
    item.style.transitionDelay = `${delays[index] * 100}ms`;
});

// Detect if object must be displayed or not with a treshold
window.addEventListener('scroll', () => {
  targets.forEach((target) => {

    let targetY = target.getBoundingClientRect().top;
    const treshold = screen.height * 0.8;

    if(targetY-treshold <= 0) {
      target.classList.add('visible');
    }else {
      target.classList.remove('visible');
    }
  });
});