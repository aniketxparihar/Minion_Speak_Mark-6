var btnTranslate = document.querySelector("#normie-to-banana");
var normieTxt = document.querySelector("#normie");
var outputDiv = document.querySelector("#banana");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function clickHandler() {
    console.log("hello")
    var inputText = normieTxt.value;
    fetch(makeURL(inputText))
        .then(response => response.json())
        .then(json => {
            var bananaTxt = json.contents.translated;
            outputDiv.innerText = bananaTxt;
        }).catch(errorHandler)
}

function makeURL(input)
{
    console.log(serverURL + "?" + "text=" + input);
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error)
{
    alert("something went wrong! Check again in some time");
}

btnTranslate.addEventListener("click", clickHandler);