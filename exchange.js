document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    console.log(amount, currency, convert, result);

    const API_KEY="Yo3wpLsMrrNSAwwu9zI6lA==JLjD8cuKTqlPDhM9"

    const apiURL="https://api.api-ninjas.com/v1/exchangerate?pair="

    convert.addEventListener('click', () => {
        const amountTotal = parseFloat(amount.value);
        const baseCurrencyTotal = baseCurrency.value;
        const targetCurrencyTotal = targetCurrency.value;
        const url = apiURL + baseCurrencyTotal + "_" + targetCurrencyTotal;

        fetch(url, {
            headers: {
                "X-Api-Key": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${baseCurrencyTotal} = ${resultPrice.toFixed(2)} ${targetCurrencyTotal}`;

        })
        .catch(error => {
            console.error("Failed", error);
            result.innerHTML = "An error occurred";
        })
    })

})

