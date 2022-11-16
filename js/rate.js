const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form .cal-btn");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "INR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == ""){
        amount.value = "";
        amountVal = 0;
    }
    exchangeRateTxt.innerHTML = `<p style="color:#3AD2FF;">Getting exchange rate...</p>`;
    let url = `https://v6.exchangerate-api.com/v6/e55e5c205ad0595fb9cf63f7/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerHTML = `<p style="color: rgba(243, 0, 75, 1);">Something went wrong.</p>`;
    });
}

function updScreen(val) {

var x = document.getElementById(
"amount").value;

document.getElementById("amount")
.value = x + val;

}

function backSpaces() {
var bsp = document.getElementById("amount").value;
document.getElementById("amount").value=bsp.substring(0,bsp.length -1);

document.getElementById("amount").style.color = "rgba(243, 0, 75, 1)";

}

function clearVal() {
    document.getElementById("amount").value = "";
	document.getElementById("rate").innerHTML = "";
	document.getElementById("amount").style.color = "#3AD2FF";
	
	
};

function color4(){
document.getElementById("amount").style.color = "#3AD2FF";



}




function changeBgColor(color){
    // if provided color, set color to LS
    if (color) window.localStorage.setItem('bgColor', color);
    // if no provided color, check LS for color, and if no color in LS, fail silently
    else if (!(color = window.localStorage.getItem('bgColor'))) return;

    // update the page
    var elements = document.getElementsByClassName("card-bg")
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background=color;
    }
}

window.addEventListener('DOMContentLoaded', () => changeBgColor());