const calculate = document.querySelector('.calculate');

calculate.addEventListener('click', (e)=> {
    e.preventDefault();

    const billAmt = document.getElementById('amount').value;

    const percentage = document.getElementById('discount-percentage').value;

    const discountAmt = document.getElementById('discount-amount');
    const FinalPay = document.getElementById('pay');


    discountAmt.value = billAmt * percentage / 100;
    FinalPay.value = billAmt - discountAmt.value;
});


// Switch between Dark and Light Modes

function themeSwitcher() {

 var dark = document.getElementById(
  "dark-mode");

 var th = document.getElementById(
  "theme");

 if (th.getAttribute('href') ==
  'dark3.css') {

  th.href = 'light3.css';

  dark.innerHTML =
   '<i class="bi-brightness-high-fill"></i>';

 } else {

  th.href = 'dark3.css';

  dark.innerHTML =
   '<i class="fa fa-moon-o"></i>';

 }

}

function play() {var audio = document.getElementById("audio"); audio.play();
		}
		