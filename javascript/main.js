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

function result (main, num, lastOperand) {

    if (lastOperand == 'plus') {
        return main + num;
    }

    if (lastOperand == 'minus') {
        return main - num;
    }

    if (lastOperand == 'divide') {
        return main / num;
    }

    if (lastOperand == 'multiply') {
        return main * num;
    }

}

const button = document.querySelectorAll('.btn');
const mainText = document.querySelector('.main');
const operandText = document.querySelector('.operand');
const opNumText = document.querySelector('.opNum');
const upper = document.querySelector('.upper');
// const displayText = document.querySelector('.displayText');
// const display = document.querySelector('.display');
let num="";
let main=0;
let operandActive=false;
let eqActive = false;
let lastOperand;
// let number1;
// let number2;
// let resultNumber;
// let displayTextFontSize = 50;
// let operandActive = false;
// let givenResult = false;
// let number2Present = false;

// result.classList.add('result');
// res.classList.add('res');

// result.appendChild(res);

button.forEach(btn => 
    btn.addEventListener("click", function() {
    let pInt = btn.id;

    if (operandActive == true) {
        mainText.textContent = "";
        num = "";
        operandActive = false;
    }

    if (pInt >= 0 && pInt <10 && operandActive == false){
        num = num + pInt;
        mainText.textContent = num;
    } 

    
}
));

button.forEach(btn => 
    btn.addEventListener("click", function() {

    if (eqActive == true) {
        mainText.textContent = 0;
        location.reload();
    }

    if (btn.id === 'plus' || btn.id === 'minus' || btn.id === 'multiply' || btn.id === 'divide' || btn.id === 'C'){
        main = parseInt(num);

        upper.style.visibility = 'visible';
        operandText.textContent = operands(btn.id);
        opNumText.textContent = main;
        lastOperand = btn.id;
        operandActive = true;
    }

    if (btn.id === 'equals'){
        num = parseInt(num);
        main = result (main, num, lastOperand);
        mainText.textContent = main;
        upper.style.visibility = 'hidden';
        eqActive = true;
    }
}
));




// function operands(str) {
//     switch (str) {
//         case 'plus': return '+';
//         break;
//         case 'minus': return '-';
//         break;
//         case 'multiply': return 'x';
//         break;
//         case 'divide': return '÷';
//         break;
//     }
// }

// function resFunction () {
//     number1 = parseInt(num1);
//     number2 = parseInt(num2);
           
//     resultNumber = number1+number2;

//     display.appendChild(result);
//     result.textContent = resultNumber;
//     displayText.style.fontSize = '20px';
//     givenResult = true;
//     operandActive = false;
//     num1 = "";
//     num2 = "";

//     console.log("Number 1:" + number1 + " Number 2: " + number2 + " Result: " + resultNumber);
// }

// button.forEach(btn => 
//     btn.addEventListener("click", function() {
//         let pInt = btn.id;
        
//         if (pInt >= 0 && pInt <10 && operandActive== false && givenResult==false){
//             num1 = num1 + pInt;
//             number1Text.textContent = num1;
//             for (let i=0; i<num1.length; i++){
//                 if (i % 3 == 0 ) {
//                     displayText.style.fontSize = `${displayTextFontSize-i*2}px`;
                    
//                 }
//             }
            
//         } else if (pInt >= 0 && pInt <10 && operandActive== true && givenResult == false){
//             num2 = num2 + pInt;
//             result.textContent = num2;
//             number2Present = true;
//             for (let i=0; i<num2.length; i++){
//                 if (i % 3 == 0 ) {
//                     displayText.style.fontSize = `${displayTextFontSize-i*2}px`;
                    
//                 }
//             }
//         } else if (pInt >= 0 && pInt <10 && operandActive== false && givenResult == true){
//             num1 = resultNumber;
//             number1.textContent = num1;
//             for (let i=0; i<num1.length; i++){
//                 if (i % 3 == 0 ) {
//                     displayText.style.fontSize = `${displayTextFontSize-i*2}px`;
                    
//                 }
//             }
            
//         } else if (pInt >= 0 && pInt <10 && operandActive== true && givenResult == true){
//             num1 = resultNumber;
//             num2 = num2 + pInt;
//             result.textContent = num2;
//             displayText.style.paddingRight = '15px';
//             number2Present = true;
//             for (let i=0; i<num2.length; i++){
//                 if (i % 3 == 0 ) {
//                     displayText.style.fontSize = `${displayTextFontSize-i*2}px`;
                    
//                 }
//             }
            
//         } else console.log("Out of range");
//     }
// ));

// button.forEach(btn => 
//     btn.addEventListener("click", function() {

//         if (btn.id === 'plus' || btn.id === 'minus' || btn.id === 'multiply' || btn.id === 'divide' || btn.id === 'C'){
            
//             if(number2Present) {
//                 resFunction();
//                 console.log("not undefined");
//             } else if (!number2Present){
//                 number1 = parseInt(num1);
//                 display.appendChild(result);
//                 display.style.fontSize = '20px';
//                 operandText.textContent = operands(btn.id);
//                 operandActive = true;
//             } 
//         } else if (btn.id === 'equals'){
//             resFunction ();
//             operandText.textContent = "";
//             number1 = resultNumber;
//             number1Text.textContent = number1;
//             display.removeChild(result);
//             number1Text.style.fontSize = '50px';
//         }
//     }
// ));

