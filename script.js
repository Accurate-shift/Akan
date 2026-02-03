//Akan Names
const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

// Logic
function calculateAkanName() {
  const dd = parseInt(document.querySelector('[data-input="day"]').value);
  const mm = parseInt(document.querySelector('[data-input="month"]').value);
  const yearInput = document.querySelector('[data-input="year"]').value;
  const gender = document.querySelector('[data-input="gender"]').value;
  const resultDisplay = document.querySelector('[data-ref="result"]');

  if (!dd || !mm || !yearInput) return alert("Please fill in all fields!");

