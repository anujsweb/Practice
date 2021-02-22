var txtInput = document.querySelector("#txt-input");
var inpButton = document.querySelector("#button1");
var outputDiv = document.querySelector("#output");

serverUrl = "https://api.funtranslations.com/translate/minion.json";

function Handler() {
    Inp = txtInput.value;
    textInp = serverUrl + "?text=" + Inp;

    
        var getTranslation = Inp ;
        outputDiv.innerText = getTranslation;
};

inpButton.addEventListener("click", Handler);