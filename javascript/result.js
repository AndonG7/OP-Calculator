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