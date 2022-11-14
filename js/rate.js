// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
	
	
}

function updScreen(val) {

var x = document.getElementById(
"bill_amount").value;

document.getElementById("bill_amount")
.value = x + val;

}


// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

// display results after convertion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
    document.getElementById("amount").value = "";
	document.getElementById("sel1").value = "";
	document.getElementById("sel2").value = "";
	document.getElementsByClassName("finalValue").innerHTML = "";
};


function backSpace() {
var bsp = document.getElementById("amount").value;
document.getElementById("amount").value=bsp.substring(0,bsp.length -1);

document.getElementById("amount").style.color = "rgba(243, 0, 75, 1)";
 

}






function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function color5(){
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


function updScreen(val) {

var x = document.getElementById(
"amount").value;

document.getElementById("amount")
.value = x + val;

}