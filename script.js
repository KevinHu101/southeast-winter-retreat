document.addEventListener("DOMContentLoaded", () => {
  // 1. Staggered Snowflake Generator
  const snowContainer = document.getElementById("snow-container");
  if (snowContainer) {
    const snowflakeCount = 40;
    for (let i = 0; i < snowflakeCount; i++) {
      const flake = document.createElement("div");
      flake.classList.add("snowflake");
      flake.innerHTML = "❄";

      const size = Math.random() * 10 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 6 + 5;
      const delay = i * 0.15;
      const targetOpacity = Math.random() * 0.6 + 0.2;

      flake.style.fontSize = `${size}px`;
      flake.style.left = `${left}vw`;
      flake.style.animationDuration = `${duration}s, 1s`;
      flake.style.animationDelay = `${delay}s, ${delay}s`;
      flake.style.setProperty("--target-opacity", targetOpacity);

      snowContainer.appendChild(flake);
    }
  }

  // 2. Smooth Scroll for Navigation & Logo
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href.includes("workshops.html") && !href.includes("#")) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const targetId = href.substring(hashIndex);

      if (targetId === "#top" || targetId === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 3. Dynamic Scroll-Spy to update Side Navigation Active State
  const sections = document.querySelectorAll("section[id]");
  const sideLinks = document.querySelectorAll(".side-link");

  function activeScrollSpy() {
    let scrollY = window.pageYOffset;

    // If near the top (Hero area), untoggle all dots
    if (scrollY < 200) {
      sideLinks.forEach((link) => link.classList.remove("active"));
      return;
    }

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 200;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sideLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activeScrollSpy);
  activeScrollSpy(); // Run on load
});
