const pages = document.querySelectorAll(".page");
 const translateAmount = 100; 
 let translate = 0;
 
 slide = (direction) => {
 
 direction === "next" ? translate -= translateAmount : translate += translateAmount;
 
 pages.forEach(
 pages => (pages.style.transform = `translateX(${translate}%)`)
 );
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
 myVar = setTimeout(showPage, 2000);
 }
 
 function showPage() {
 document.getElementById("loader").style.display = "none";
 document.getElementById("myDiv").style.display = "block";
 }
 


    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const setTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    
    // Default to light theme
    if (!currentTheme) {
    localStorage.setItem('theme', 'light');
    document.documentElement.dataset.theme = 'light';
    return;
    }
    
    document.documentElement.dataset.theme = currentTheme;
    }
    
    // Set theme on page load
    setTheme();
    
    const transition = () => {
    document.documentElement.classList.add('transition');
    
    setTimeout(() => {
    document.documentElement.classList.remove('transition');
    }, 1000)
    }
    
    // Handle theme toggle
    const themeToggleBtn = document.querySelector('.js-toggle-theme');
    
    themeToggleBtn.addEventListener('click', () => {  
    const { theme } = document.documentElement.dataset;
    const themeTo = theme === 'light' ? 'dark' : 'light';
    const themeLabel = `Activate ${theme} mode`;
    
    document.documentElement.dataset.theme = themeTo;
    localStorage.setItem('theme', themeTo);
    
    themeToggleBtn.setAttribute('aria-label', themeLabel);
    themeToggleBtn.setAttribute('title', themeLabel);
    
    transition();
    });
    
    