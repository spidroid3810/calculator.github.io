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