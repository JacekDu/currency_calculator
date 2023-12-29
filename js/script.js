{
  const calculateResult = (amount, currency) => {

    const rateUSD = 4.7340;
    const rateEUR = 4.7089;
    const rateGBP = 5.4748;

    switch (currency) {
      case "USD":
        return amount / rateUSD;

      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-calculation");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amountInPLN");
    const currencyElement = document.querySelector(".js-currencyName");
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
