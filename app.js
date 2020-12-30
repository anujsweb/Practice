var txtInput = document.querySelector("#txt-input");
var inpButton = document.querySelector("#button1");
var outputDiv = document.querySelector("#output");

serverUrl = "https://api.funtranslations.com/translate/minion.json";

function Handler() {
    Inp = txtInput.value;
    textInp = serverUrl + "?text=" + Inp;

    fetch(textInp).then(response => response.json()).then(json => {
        var getTranslation = json.contents.translated;
        outputDiv.innerText = getTranslation;
    })
};

inpButton.addEventListener("click", Handler);