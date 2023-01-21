function decreaseFontSize () {
    for (let i=0; i<num.length; i++){
        if (i % 3 == 0 && i != 0) {
            displayText.style.fontSize = `${displayTextFontSize-((i/3)+10)}px`;
        }
        if (num.length > 13) {
            alert("Too many arguments!");
            num = 0; 
            location.reload();
        }
    }
}