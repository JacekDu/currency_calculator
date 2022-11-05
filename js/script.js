let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountInPLN");
let currencyElement = document.querySelector(".js-currencyName");
let resultElement = document.querySelector(".js-calculation");

let rateUSD = 4.7340;
let rateEUR = 4.7089;
let rateGBP = 5.4748;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  
  let result;
  
  switch (currency) {
      case "USD":
      result = amount / rateUSD;
      break;
      
      case "EUR":
      result = amount / rateEUR;
      break;
      
      case "GBP":
      result = amount / rateGBP;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
