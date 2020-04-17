import compCheck from './payCompCheck.js'
import algLuna from './algLuna.js'



let input = document.getElementById('field');
let button = document.getElementsByClassName('button')[0];
let hintButton = document.getElementsByClassName('hint-button');
hintButton = [...hintButton];
let valid = document.getElementsByClassName('valid')[0];
let invalid = document.getElementsByClassName('not-valid')[0];

export function numberValidate() {
    let data = input.value;
    let check = algLuna(data);
    if (check) {
        valid.classList.remove('invisible');
    } else {
        invalid.classList.remove('invisible');
    }
}

export function payCompanyIdentific() {
    let visible = document.getElementsByClassName('visible');
    let data = input.value;
    let company = compCheck(data);
    if (company === 'mir') {
        let card = document.getElementsByClassName('mir')[0];
        card.classList.add('visible');
    } else if (company === 'visa') {
        let card = document.getElementsByClassName('visa')[0];
        card.classList.add('visible');
    } else if (company === 'amex') {
        let card = document.getElementsByClassName('amex')[0];
        card.classList.add('visible');
    } else if (company === 'mastercard') {
        let card = document.getElementsByClassName('mastercard')[0];
        card.classList.add('visible');
    } else if (company === 'discover') {
        let card = document.getElementsByClassName('discover')[0];
        card.classList.add('visible');
    } else {
        visible = [...visible];
        if(visible.length > 0) {
            for (let i=0; i < visible.length; i++) {
                visible[i].classList.remove('visible');
            }
        }
    }
    visible = [...visible];
    if(visible.length > 1) {
        for (let i=0; i < visible.length; i++) {
            visible[i].classList.remove('visible');
        }
    }

}

function hideAhint () {
    let element = event.target;
    let parentElement = element.parentElement;
    parentElement.classList.add('invisible');
    input.value = null;
    let compInd = document.getElementsByClassName('visible')[0];
    compInd.classList.remove('visible');

}


input.addEventListener('input', payCompanyIdentific);

button.addEventListener('click', numberValidate);

for (let i=0; i<2; i++) {
    hintButton[i].addEventListener('click', hideAhint);
}

