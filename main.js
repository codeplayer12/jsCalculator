let op = prompt('Enter any of the operator from [+,-,*,/,%] to calculate:');
let firstInput = parseFloat(prompt('Enter First Number'));
let secondNumber = parseFloat(prompt('Enter Second Number'));


let total;

if(op==='+'){
    total = firstInput + secondNumber
}else if(op==='-'){
    total = firstInput - secondNumber
}else if(op==='/'){
    if(secondNumber===0){
        alert('Cannot perform calculatioin')
    }else{
        total = firstInput / secondNumber
    }
}else if(op === '*'){
    total = firstInput * secondNumber
}else if(op==='%'){
    total = firstInput % secondNumber
}
else{
    alert('Invalid values')
}


alert(`${firstInput} ${op} ${secondNumber} = ${total}`);