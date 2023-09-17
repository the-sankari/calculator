let calculation =localStorage.getItem('calculation') || '';
      
const showCal = document.querySelector('.calculation');
      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation', calculation)
        displayCalculation();
      }

function displayCalculation() {
  showCal.innerHTML = `${calculation}`;
}
displayCalculation();