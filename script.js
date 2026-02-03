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

  let year = parseInt(yearInput);
  let month = mm;
//January and February
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  

  const CC = Math.floor(year / 100); 
  const YY = year % 100;            

  //formula
  const term1 = Math.floor(CC / 4) - (2 * CC) - 1;
  const term2 = Math.floor((5 * YY) / 4);
  const term3 = Math.floor((26 * (month + 1)) / 10);
  
  // Calculate d (0 = Sunday, 6 = Saturday)
  let d = (term1 + term2 + term3 + dd) % 7;
  
  const dayIndex = Math.abs(Math.floor((d + 7) % 7));

  //result
  const name = akanNames[gender][dayIndex];
  resultDisplay.textContent = name;
}

  //Event Listener
  document.querySelector('[data-action="generate"]').addEventListener('click', calculateAkanName);