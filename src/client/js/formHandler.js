import {
    checkForName
} from "./nameChecker";

// TODO: validate input

function getResultText(response) {
    return `
        <div>agreement: ${response.agreement}</div>
        <div>confidence: ${response.confidence}</div>
        <div>irony: ${response.irony}</div>
        <div>score tag: ${response.score_tag}</div>
    `
}
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log('formText', formText);
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                "text": formText
            })
        })
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = getResultText(res);
        })
}

export {
    handleSubmit
}