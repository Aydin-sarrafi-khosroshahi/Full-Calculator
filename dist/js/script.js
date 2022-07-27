const dis1El = document.querySelector('.display-1');
const dis2El = document.querySelector('.display-2');

const operationsEl = document.querySelectorAll('.opeartion');
const numbersEl = document.querySelectorAll('.number');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.clear-last');


let dis1Num = "";
let dis2Num = "";
let haveDot = false;
let lastOperation = "";
let result = "";



numbersEl.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;

        dis2El.innerText = dis2Num;
    })
})

operationsEl.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const opeartionName = e.target.innerText;
        lastOperation = opeartionName;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clerVar(opeartionName)

    })
})

function clerVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    dis1El.innerText = dis1Num;
    dis2El.innerText = '';
    dis2Num = '';
}

function mathOperation() {
    if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(dis2Num);

    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);

    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);

    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);

    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}


equalEl.addEventListener('click' , (e)=>{
    if( !dis1Num || !dis2Num ) return;
    haveDot = false;
    mathOperation();
    clerVar();
    dis2El.innerText = result;
    dis2Num = result;
    dis1Num = '';
})