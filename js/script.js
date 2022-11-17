const buttons = document
    .querySelector('.buttons');

const screen = document
    .querySelector('.screen');

  
buttons
    .addEventListener('click', (e) => {

        let value = e.target.textContent;
        let screenVal = screen.textContent;

     

        switch (value) {
            case 'AC':
                screen.textContent = '';
                screenVal = screen.textContent;
                return;

            case '=':
                screen.textContent = eval(screenVal.replace('×', '*'));
                return;

            case '×2':
                screen.textContent = eval(screenVal * screenVal);
                return;

            case '':
                screen.textContent = screenVal.substring(0, screenVal.length-1);
                return;
                
            case '+/-': 
                screen.textContent = eval(- screenVal);
            return;
           
        }

        screen.textContent = screenVal + value;

    });

function color1(){
document.getElementById("myDiv").style.color = "rgba(243, 0, 75, 1)";

}

function color2(){
document.getElementById("myDiv").style.color = "#3AD2FF";



}

function color3(){
document.getElementById("myDiv").style.color = "rgb(10, 251, 130)";

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


function load(){    
    var checked = JSON.parse(localStorage.getItem('MyElement'));
    document.getElementById("MyElement").checked = checked;
}

function save(){
    var checkbox = document.getElementById('MyElement');
    localStorage.setItem('MyElement', checkbox.checked);
}


