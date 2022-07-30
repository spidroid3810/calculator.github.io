const pages = document.querySelectorAll(".page");
 const translateAmount = 100; 
 let translate = 0;
 
 slide = (direction) => {
 
 direction === "next" ? translate -= translateAmount : translate += translateAmount;
 
 pages.forEach(
 pages => (pages.style.transform = `translateX(${translate}%)`)
 );
 }
 
 function themeSwitcher() {
 
 var dark = document.getElementById(
 "dark-mode");
 
 var th = document.getElementById(
 "theme");
 
 if (th.getAttribute('href') ==
 'light.css') {
 
 th.href = 'dark.css';
 
 dark.innerHTML =
 '<i class="bi-brightness-high-fill"></i>';
 
 } else {
 
 th.href = 'light.css';
 
 dark.innerHTML =
 '<i class="fa fa-moon-o"></i>';
 
 }
 
 }
 
 
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
 
 
 
 function play() {var audio = document.getElementById("audio"); audio.play();
 }
 
 
 var myVar;
 
 function myFunction() {
 myVar = setTimeout(showPage, 0000);
 }
 
 function showPage() {
 document.getElementById("loader").style.display = "none";
 document.getElementById("myDiv").style.display = "block";
 }
 
let loadColorScheme = (scheme) => {
	let head = document.getElementsByTagName("head")[0];
	let link = document.createElement("link");

link.type = "text/css";
	link.rel = "stylesheet";
	link.href = `./css/${scheme}.css`;

head.appendChild(link);
};
// assuming the if else block is inside window.matchMedia()
if (colorScheme === "dark") {
	loadColorScheme("dark.css");
	// loads /css/dark.css
} else {
	loadColorScheme("light.css");
	// loads /css/light.css
}