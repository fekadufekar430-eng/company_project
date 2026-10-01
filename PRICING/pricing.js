// Custom JavaScript for Pricing Section

document.addEventListener("DOMContentLoaded", function () {
  const monthlyBtn = document.getElementById("monthlyBtn");
  const yearlyBtn = document.getElementById("yearlyBtn");
  const prices = document.querySelectorAll(".price-value");

  // When Yearly button is clicked
  yearlyBtn.addEventListener("click", function () {
    yearlyBtn.classList.replace("btn-outline-primary", "btn-primary");
    monthlyBtn.classList.replace("btn-primary", "btn-outline-primary");

    prices.forEach((price) => {
      let yearlyValue = price.getAttribute("data-yearly");
      price.innerText = yearlyValue;
    });
  });

  // When Monthly button is clicked
  monthlyBtn.addEventListener("click", function () {
    monthlyBtn.classList.replace("btn-outline-primary", "btn-primary");
    yearlyBtn.classList.replace("btn-primary", "btn-outline-primary");

    prices.forEach((price) => {
      let monthlyValue = price.getAttribute("data-monthly");
      price.innerText = monthlyValue;
    });
  });
});
