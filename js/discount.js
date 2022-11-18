const bill_amount = document.getElementById('bill_amount');
const select_percentage = document.getElementById('select_percentage');
const discount_amount = document.getElementById('discount_amount');
const final_amount = document.getElementById('final_amount');

const btn_1 = document.getElementById('btn_1').addEventListener("click", (e)=>{
    if((bill_amount.value !== "") && (select_percentage.value !== "-percentage-")){
        let discount = bill_amount.value * (select_percentage.value / 100);
        discount_amount.value = discount.toFixed(2);
    }
    
    if((bill_amount.value !== "") && (select_percentage.value = "-percentage-") && (discount_amount.value !== "")){
        let final = bill_amount.value - discount_amount.value;
        final_amount.value = final.toFixed(2);
    }
})


const btn_2 = document.getElementById('btn_2').addEventListener("click", (e)=>{
    bill_amount.value = "";
    select_percentage.value = "-percentage-";
    discount_amount.value = "";
    final_amount.value = "";
})


function back() {
var bsp = document.getElementById("bill_amount").value;
document.getElementById("bill_amount").value=bsp.substring(0,bsp.length -1);

document.getElementById("bill_amount").style.color = "rgba(243, 0, 75, 1)";

}



function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function color4(){
document.getElementById("bill_amount").style.color = "#3AD2FF";



}

function updScreen(val) {

var x = document.getElementById(
"bill_amount").value;

document.getElementById("bill_amount")
.value = x + val;

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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
