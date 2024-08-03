let textValue = ''

function addNumber(Number){
    textValue += Number;
    updateText()
}
function addOperator(Operator){
    textValue += Operator;
    updateText()
}
function addDecimal(){
    textValue += '.'
    updateText()
}
function clearText(){
    textValue = ''
    updateText()
}
function updateText(){
    document.querySelector('#display').value =
    textValue;
}
function calculate(){
    textValue = eval(textValue)
    updateText()
}