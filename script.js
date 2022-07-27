// Clear screen with C button.
function backSpace() {
                var bsp = document.getElementById("result").value;
                document.getElementById("result").value=bsp.substring(0,bsp.length -1);
            }
function clearScreen() {

 document.getElementById("result")
  .value = "";

}

// Display updates in Result Input

function updScreen(val) {

 var x = document.getElementById(
  "result").value;

 document.getElementById("result")
  .value = x + val;

}

// Switch between Dark and Light Modes

function themeSwitcher() {

 var dark = document.getElementById(
  "dark-mode");

 var th = document.getElementById(
  "theme");

 if (th.getAttribute('href') ==
  'dark.css') {

  th.href = 'light.css';

  dark.innerHTML =
   '<i class="bi-brightness-high-fill"></i>';

 } else {

  th.href = 'dark.css';

  dark.innerHTML =
   '<i class="fa fa-moon-o"></i>';

 }

}

function play() {var audio = document.getElementById("audio"); audio.play();
		}

		
 let body = document.querySelector("body");
 let content = document.getElementById("content");
 
 window
 .matchMedia("(prefers-color-scheme: dark)")
 .addEventListener("change", function (e) {
 const colorScheme = e.matches ? "dark" : "light";
 console.log(colorScheme);
 
 if (colorScheme === "dark") {
 body.style.background = "linear-gradient(to right, #38ef7d, #11998e)";
 content.setAttribute("class", "light");
 } else {
 body.style.background = "linear-gradient(to right,#28282B,#000000)";
 content.setAttribute("class", "dark");
 }
 });
  








		
