document.addEventListener("DOMContentLoaded", () => {
  const dataYearFooter = document.getElementById("year");

  if (dataYearFooter) {
    dataYearFooter.textContent = new Date().getFullYear();
  }
});
