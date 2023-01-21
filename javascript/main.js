const button = document.querySelectorAll('.btn');
const mainText = document.querySelector('.main');
const operandText = document.querySelector('.operand');
const opNumText = document.querySelector('.opNum');
const upper = document.querySelector('.upper');
const displayText = document.querySelector('.displayText');
const displayTextFontSize = 50;

let num="";
let main=0;
let operandActive=false;
let eqActive = false;
let reset = false;
let lastOperand;

button.forEach(btn => 
    btn.addEventListener("click", function() {
    let pInt = btn.id;

    if (operandActive == true) {
        if (reset == true) {
            mainText.textContent = "";
            num = "";
            reset = false;
        }
        num = num + pInt;
        mainText.textContent = num;
        decreaseFontSize();
    }

    if (pInt >= 0 && pInt <10 && operandActive == false){
        num = num + pInt;
        mainText.textContent = num;
        decreaseFontSize();
    } 

    
}
));


button.forEach(btn => 
    btn.addEventListener("click", function() {

    if (num=="") {
        num = 0;
    }

    if (eqActive == true) {
        mainText.textContent = 0;
        location.reload();
    }

    if (btn.id === 'plus' || btn.id === 'minus' || btn.id === 'multiply' || btn.id === 'divide'){
        

        if (operandActive === true) {
            operandText.textContent = operands(btn.id);
            num = parseInt(num);
            main = result (main, num, lastOperand);
            mainText.textContent = Math.round(main * 100000) / 100000;;
            opNumText.textContent = Math.round(main * 100000) / 100000;;
            lastOperand = btn.id;
            reset = true;

        } else {
            main = parseInt(num);
            upper.style.visibility = 'visible';
            operandText.textContent = operands(btn.id);
            opNumText.textContent = Math.round(main * 100000) / 100000;;
            lastOperand = btn.id;
            operandActive = true;
            reset = true;
            console.log("Operand set to active");
        }
    }

    if (btn.id === 'equals' && main != 0){
        num = parseInt(num);
        main = result (main, num, lastOperand);
        mainText.textContent = Math.round(main * 100000) / 100000;
        upper.style.visibility = 'hidden';
        eqActive = true;
    }

    if (btn.id === 'CE') {
        location.reload();
    }
}
));