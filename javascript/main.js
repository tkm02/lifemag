// loading page
document.addEventListener("DOMContentLoaded", function () {
  // Simulez une attente de chargement (vous pouvez remplacer cela par votre logique de chargement réelle)
  setTimeout(function () {
      var mainContent = document.getElementById("main-content");

      if (mainContent) {
          mainContent.style.display = "block"; // Affiche le contenu principal
          var loadingContainer = document.querySelector(".loading-container");
          
          if (loadingContainer) {
              loadingContainer.style.display = "none"; // Masque l'animation de chargement

              // Redirige vers la page suivante
              window.location.href = "./index.html"; // Remplacez "page_suivante.html" par le nom de votre page suivante
          } else {
              console.error("Element with class 'loading-container' not found");
          }
      } else {
          console.error("Element with ID 'main-content' not found");
      }
  }, 3000); // Remplacez 2000 par la durée réelle de votre chargement
});




// Récupération de la section "contact"
const contactSection = document.getElementById("contact");
const navBar = document.querySelector("header");
const contactbtn = document.getElementById("contactbutton")

// Ajout d'un événement "scroll" à la fenêtre
window.addEventListener("scroll", function () {
  // Vérification si l'utilisateur a atteint la section "contact"
  if (window.scrollY >= contactSection.offsetTop - 100) {
    // Récupération de la barre de navigation

    // Ajout de la classe "contact-bg" pour changer la couleur de fond
    navBar.classList.add("contact-bg");
    contactbtn.classList.add('buttoncolour');

  } else {
    // Suppression de la classe "contact-bg" pour revenir à la couleur d'origine
    navBar.classList.remove("contact-bg");
    contactbtn.classList.remove('buttoncolour');

  }
});

function updateProgressBar() {
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolledHeight = window.scrollY;
  const progressPercentage = scrolledHeight / totalHeight * 100;
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = progressPercentage + "%";
}
window.addEventListener("scroll", updateProgressBar);



AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//slider magazine.html
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  preventClicks: true,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 220,
    depth: 210,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Vérification de la largeur de l'écran pour les écrans de moins de 572 pixels
if (window.innerWidth < 572) {
  // Modifier les options pour les écrans plus petits
  swiper.destroy(); // Détruire l'instance Swiper actuelle

  swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    preventClicks: true,
    speed: 600, 
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 200, 
      depth: 160, 
      modifier: 0.8, 
      slideShadows: false,
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      }
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

