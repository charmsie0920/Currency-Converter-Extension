document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY="Yo3wpLsMrrNSAwwu9zI6lA==JLjD8cuKTqlPDhM9"

    const apiURL="https://api.api-ninjas.com/v1/exchangerate?pair=GBP_"

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiURL + currencyTotal;

        fetch(url, {
            headers: {
                "X-Api-Key": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;

        })
        .catch(error => {
            console.error("Failed", error);
            result.innerHTML = "An error occurred";
        })
    })

})

