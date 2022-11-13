

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




function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

