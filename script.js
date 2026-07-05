const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function () {
  contactInfo.classList.toggle("visible");
});