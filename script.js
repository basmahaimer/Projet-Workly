document.addEventListener("DOMContentLoaded", () => {
  // === Ton code JS ici ===

  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
      messageDiv.textContent = "⚠️ Please enter your email.";
      messageDiv.style.color = "red";
      messageDiv.style.display = "block";
      return;
    }

    if (isValidEmail(email)) {
      messageDiv.textContent = "✅ Thank you for subscribing!";
      messageDiv.style.color = "green";
      messageDiv.style.display = "block";

      setTimeout(() => {
        emailInput.value = "";
        messageDiv.style.display = "none";
      }, 2000);
    } else {
      messageDiv.textContent = "❌ Invalid email address. Please check and try again.";
      messageDiv.style.color = "red";
      messageDiv.style.display = "block";
    }
  });

  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactUsBtn2 = document.getElementById("contactUsBtn2");
  const modal = document.getElementById("contactModal");
  const closeModalBtn = document.getElementById("closeModal");
  const contactForm = document.getElementById("contactForm");

  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("show");
    });
  }

  if (contactUsBtn2) {
    contactUsBtn2.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("show");
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show");
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
      alert("Thank you for contacting us, " + contactForm.name.value + "!");
      contactForm.reset();
      modal.classList.remove("show");
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
});




