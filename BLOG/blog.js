document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Scroll top button toggle
   */
  const scrollTopBtn = document.querySelector("#scroll-top");

  function toggleScrollTop() {
    if (scrollTopBtn) {
      window.scrollY > 100
        ? scrollTopBtn.classList.add("active")
        : scrollTopBtn.classList.remove("active");
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Mobile Navigation Menu Toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  /**
   * Mobile Nav Dropdown Toggle
   */
  const dropdownToggleLinks = document.querySelectorAll(
    ".navmenu .dropdown > a",
  );

  dropdownToggleLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Toggle dropdown sub-menu on smaller devices
      if (window.innerWidth < 1200) {
        e.preventDefault();
        const parentLi = link.parentElement;
        parentLi.classList.toggle("dropdown-active");
      }
    });
  });

  /**
   * Blog Pagination Active State Logic
   */
  const paginationLinks = document.querySelectorAll(".pagination-list li a");
  paginationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!isNaN(link.innerText.trim())) {
        e.preventDefault();
        paginationLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});
