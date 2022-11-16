let result = document.querySelector('.result-operation')
let btns = document.querySelectorAll('.btn-calculator')
let op = ''
let num1 = ''
let num2 = ''

let resultado = 0

function captureValue(x) {
    num1 = num1 + btns[x].textContent
    if(x == 0){
        num1 = ''
        num2 = ''
        result.textContent = '0'
    }
    if (x == 3 || x == 7 || x == 11 || x == 15) {
        num1 = parseFloat(num1)
        op = btns[x].textContent
        num2 = parseFloat(resultado + num1)
        num1 = ''
    }
    result.textContent = num1
    if (x == 18) {
        num1 = parseFloat(num1)
        switch (op) {
            case '+':
                resultado = num1 + num2
                num2 = resultado
                num1 = 0
                
                console.log("Resultado: " + resultado)
                break;

            case '-':
                resultado = num2 - num1
                num2 = resultado
                num1 = 0
                
                console.log("Resultado: " + resultado)
                break;
            case '*':
                resultado = num1 * num2
                num2 = resultado
                num1 = 0
                
                console.log("Resultado: " + resultado)
                break;
            case '/':
                resultado = num2 / num1
                num2 = resultado
                num1 = 0
                
                console.log("Resultado: " + resultado)
                break;
            case '%':
                resultado = num2 % num1
                num2 = resultado
                num1 = 0
                
                console.log("Resultado: " + resultado)
                break;
            default:
                break;
        }
        result.textContent = resultado
    }
}