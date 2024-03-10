let texts = ["Teknik Komputer Jaringan ", "Multi Media" , "Tata Boga"];
let currentText = ""; 
let letterIndex = 0; 
let textIndex = 0; 

function typeText() {
    if (letterIndex < texts[textIndex].length) {
        currentText += texts[textIndex].charAt(letterIndex);
        document.getElementById('textChange').innerText = currentText;
        letterIndex++;
        setTimeout(typeText, 100); 
    } else {
        setTimeout(resetTyping, 2000); 
    }
}

function resetTyping() {
    currentText = ""; 
    letterIndex = 0; 
    textIndex = (textIndex + 1) % texts.length; 
    typeText(); 
}

typeText();