let reset = document.getElementById("resetButton");
let inputPeopleValue = document.getElementById('people');
let inputBillValue = document.getElementById('bill');
let error = document.getElementById('error');
let tipAmount = document.getElementById('amount');
let total = document.getElementById('total');
let tip;
const tipsButtons = document.getElementById('tipsButtons');


tipsButtons.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.style.backgroundColor = '';
            selectedButton.style.color = '';

        }
        button.style.backgroundColor = 'hsla(172, 67%, 45%, 0.712)';
        button.style.color = 'hsl(183, 100%, 15%)';
        selectedButton = button;
    });
});

function DisplayError() {
    if (inputPeopleValue.value == 0) {
        error.style.display = "block";
        inputPeopleValue.style.outline = 'rgb(170, 4, 4) solid 2px';
        alert(button);
    } else {
        error.style.display = "none";
        inputPeopleValue.style.outline = '';
        tipAmount.innerHTML = ((inputBillValue.value / inputPeopleValue.value).toFixed(2));
        total.innerHTML = ((inputBillValue.value * inputPeopleValue.value).toFixed(2));

    }
}