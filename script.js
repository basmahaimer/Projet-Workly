document.addEventListener("DOMContentLoaded", () => {
  // === Ton code JS ici ===

  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');

  if (burger) { // Vérifie que l'élément existe avant d'ajouter l'écouteur
    burger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  const subscribeBtn = document.getElementById("subscribeBtn");
  const emailInput = document.getElementById("email");
  const messageDiv = document.getElementById("confirmationMessage");

  function isValidEmail(email) {
    return /^[\w.-]+@[^\s@]+\.[^\s@]+$/.test(email); // Regex améliorée pour emails
  }

  if (subscribeBtn && emailInput && messageDiv) { // Vérifie que tous les éléments existent
    subscribeBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        messageDiv.textContent = "⚠️ Veuillez entrer votre e-mail.";
        messageDiv.style.color = "red";
        messageDiv.style.display = "block";
        return;
      }

      if (isValidEmail(email)) {
        messageDiv.textContent = "✅ Merci de vous être abonné !";
        messageDiv.style.color = "green";
        messageDiv.style.display = "block";

        setTimeout(() => {
          emailInput.value = "";
          messageDiv.style.display = "none";
        }, 2000);
      } else {
        messageDiv.textContent = "❌ Adresse e-mail invalide. Veuillez vérifier et réessayer.";
        messageDiv.style.color = "red";
        messageDiv.style.display = "block";
      }
    });
  }


  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactUsBtn2 = document.getElementById("contactUsBtn2");
  const modal = document.getElementById("contactModal");
  const closeModalBtn = document.getElementById("closeModal");
  const contactForm = document.getElementById("contactForm");

  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.classList.add("show");
    });
  }

  if (contactUsBtn2) {
    contactUsBtn2.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.classList.add("show");
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      if (modal) modal.classList.remove("show");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci de nous avoir contactés, " + contactForm.name.value + " !");
      contactForm.reset();
      if (modal) modal.classList.remove("show");
    });
  }

  const discoverOffersBtn = document.getElementById("discoverOffersBtn");
  if (discoverOffersBtn) {
    discoverOffersBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Carousel logic outside DOMContentLoaded, but called from within load event
  let currentSlide = 0;

  function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const carouselContainer = document.querySelector('.carousel-container');

    if (!carousel || !images.length || !carouselContainer) {
      console.warn("Carousel elements not found, cannot show slide.");
      return;
    }

    const totalImages = images.length;

    // Calculer la largeur d'une image plus l'espacement
    const imageWidth = images[0].offsetWidth;
    const computedStyle = getComputedStyle(carousel);
    const gap = parseFloat(computedStyle.gap) || 0;
    const itemFullWidth = imageWidth + gap;

    // Déterminer l'index de la diapositive cible
    if (index < 0) {
      currentSlide = totalImages - 1; // Revenir à la dernière image
    } else if (index >= totalImages) {
      currentSlide = 0; // Revenir à la première image
    } else {
      currentSlide = index;
    }

    // Calculer la translation brute
    let targetX = currentSlide * itemFullWidth;

    // Empêcher le défilement au-delà de la fin, garantissant aucun espace vide
    const containerWidth = carouselContainer.clientWidth;
    const maxScrollX = carousel.scrollWidth - containerWidth;

    // Limiter targetX pour qu'elle ne dépasse pas maxScrollX et ne soit pas négative
    targetX = Math.min(targetX, Math.max(0, maxScrollX));
    targetX = Math.max(0, targetX); // Assurer qu'on ne défile pas à gauche de 0

    carousel.style.transform = `translateX(-${targetX}px)`;
  }

  // Fonctions de navigation du carrousel
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Attacher les écouteurs d'événements aux boutons du carrousel
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
  }
  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
  }

  // S'adapte si la fenêtre change de taille
  window.addEventListener("resize", () => {
    // Recalculer la position pour s'adapter à la nouvelle taille de fenêtre
    showSlide(currentSlide);
  });

  // Initialisation du carrousel
  window.addEventListener("load", () => {
    showSlide(0);
  });
});