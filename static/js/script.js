document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-list a").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Initialize Google Map
  function initMap() {
    const propertyLocation = { lat: -34.397, lng: 150.644 }; // Replace with actual coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: propertyLocation,
    });
    new google.maps.Marker({
      position: propertyLocation,
      map: map,
    });
  }
  window.addEventListener("load", initMap);

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");
  hamburger?.addEventListener("click", () => {
    navList.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
  document.addEventListener("click", (event) => {
    if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
      navList.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  // Modal functionality
  const modal = document.getElementById("contactModal");
  const modalClose = document.querySelector(".modal-close");
  const contactLink = document.querySelector('.nav-list a[href="#contact"]');
  contactLink?.addEventListener("click", (event) => {
    event.preventDefault();
    if (modal) modal.style.display = "block";
  });
  modalClose?.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
  });

  // Form validation
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const { name, email, message } = contactForm.elements;
    if (![name, email, message].every((input) => input.value.trim())) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Form submitted successfully!");
    contactForm.reset();
    modal.style.display = "none";
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  function applyDarkMode(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  }
  darkModeToggle?.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Scroll-to-Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Responsive Property Card Grid
  function updatePropertyGridLayout() {
    const propertyListings = document.querySelector(".property-listings");
    if (window.innerWidth <= 768) {
      propertyListings.classList.add("column-layout");
    } else {
      propertyListings.classList.remove("column-layout");
    }
  }
  window.addEventListener("resize", updatePropertyGridLayout);
  updatePropertyGridLayout(); // Initial check

  // Real-time Search Filtering
  const searchInput = document.querySelector(".search-bar");
  const propertyCards = document.querySelectorAll(".property-card");
  searchInput?.addEventListener("input", () => {
    const filterText = searchInput.value.toLowerCase();
    propertyCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(filterText) ? "block" : "none";
    });
  });
});
