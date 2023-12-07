var amount = document.getElementById("amount");
var currency = document.getElementById("currency");
var convert = document.getElementById("convert");
var result = document.getElementById("result");



var API_KEY = "Cw4YCJaZDR3Nzm1WeHXEnQ==vsLOl8E4pTy02JSV";
var API_URL = "https://api.api-ninjas.com/v1/convertcurrency?want=USD&have=";

convert.addEventListener("click", ()=> {
    
    var amountTotal = amount.value;
    
    var selectedCurrency = currency.value;
    var url = API_URL+selectedCurrency+"&amount="+amountTotal;

    if(amount.value != ''){
        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
             console.log(data);
            var rate = data.new_amount;
            var restultValue = rate;
            result.innerHTML = `${restultValue} USD`
        })
        .catch(error => {
            console.error("Request failed:", error);
            result.innerHTML="An Error occured, Please try again later!";
        })
    }
    else{
        result.innerHTML="Enter your amount (USD)";
    }
    

});
