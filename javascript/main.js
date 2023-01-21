function operands(str) {
    switch (str) {
        case 'plus': return '+';
        break;
        case 'minus': return '-';
        break;
        case 'multiply': return 'x';
        break;
        case 'divide': return '÷';
        break;
    }
}

function result (mainn, numm, lastOperand) {


    if (isNaN(numm)) {
        numm = mainn;
    }


    if (lastOperand == 'plus') {

        console.log("Result: \n Main: " + mainn + "\n Num: " + numm + "\nLastOperand: " + lastOperand + "\n Results: " + (mainn+numm));
        return mainn + numm;
    }

    if (lastOperand == 'minus') {
        console.log("Result: \n Main: " + mainn + "\n Num: " + numm + "\nLastOperand: " + lastOperand + "\n Results: " + (mainn-numm));
        return mainn - numm;
    }

    if (lastOperand == 'divide') {
        console.log("Result: \n Main: " + mainn + "\n Num: " + numm + "\nLastOperand: " + lastOperand + "\n Results: " + (mainn/numm));
        if (mainn == 0 || numm == 0 ) {
            console.log ("zero");
            alert("Can't operate with zero!")
        } 
        return mainn / numm;
    }

    if (lastOperand == 'multiply') {
        console.log("Result: \n Main: " + mainn + "\n Num: " + numm + "\n LastOperand: " + lastOperand + "\n Results: " + (mainn*numm));
        return mainn * numm;
    }

}

const button = document.querySelectorAll('.btn');
const mainText = document.querySelector('.main');
const operandText = document.querySelector('.operand');
const opNumText = document.querySelector('.opNum');
const upper = document.querySelector('.upper');
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
    }

    if (pInt >= 0 && pInt <10 && operandActive == false){
        num = num + pInt;
        mainText.textContent = num;
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

    if (btn.id === 'equals'){
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