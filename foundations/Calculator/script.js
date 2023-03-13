function add(n1,n2){
    return n1+n2;
}
function subtract(n1,n2){
    return n1-n2;
}
function multiply(n1,n2){
    return n1*n2;
}
function divide(n1,n2){
    return n1/n2;
}
function operate(n1,n2,operator){
    switch(operator){
        case '+':
            add(n1,n2);
        case '-':
            subtract(n1,n2);
        case '*':
            multiply(n1,n2);
        case '/':
            divide(n1,n2);            
    }
}