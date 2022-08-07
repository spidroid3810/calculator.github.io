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
  // Switch between Dark and Light Modes
    
    //We're going to use "check" to get the ckeckbox element
    const check=document.getElementById("check")
    
    //If darkMode doesn’t exist in the LocalStorage, create it. False by default
    if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
    }
    
    //Create a link tag to later link the CSS file we want
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    document.getElementsByTagName('HEAD')[0].appendChild(link);
    
    //Or we can create the tag in the HTML and later reference in our code
    //const link=document.getElementsByTagName("link");  
    
    //checkStatus is only called one time in the program, when you reload the page
    //It gives the page it's default look, depening on waht darkMode is set to it will load one css or another
    checkStatus()
    
    function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
    check.checked = true;                           //the checkbox is checked (if you load the page by default it isn’t)
    link.href = 'light.css';                   //since it's true we load the dark theme CSS
    }else{
    check.checked = false;                          //the checkbox is unchecked
    link.href = 'dark.css';
    }
    }
    
    function changeStatus(){                                //This function gets called every time the checkbox is clicked
    if (localStorage.getItem('darkMode')==="true"){     //if darkMode was active and this function is called it means the user now wants light
    localStorage.setItem('darkMode', "false");      //so we set it to false, to indicate we are in light mode
    link.href = 'dark.css';
    } else{
    localStorage.setItem('darkMode', "true");       //same code but adapted for dark theme
    link.href = '';
    }
    }