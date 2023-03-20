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
function modulus(n1,n2){
    return n1%n2;
}
function operate(n1,n2,operator){
    switch(operator){
        case '+':
            return add(n1,n2);
        case '-':
            return subtract(n1,n2);
        case '*':
            return multiply(n1,n2);
        case '/':
            return divide(n1,n2);      
        case '%':
            return modulus(n1,n2);             
    }
} 
let num1;
let num2;
let op;
let opmain;
let ans;
let count='';

function operate2(){
    const one1=document.querySelector('.display')
    num1=parseInt(count);
    count='';
    const display1=document.createElement('div');
    op=event.target.id;
    display1.textContent=`${event.target.id}`;
    one1.classList.add('display1');
    one1.appendChild(display1);
}
function equals(){
    const one1=document.querySelector('.answer');
    num2=parseInt(count);
    count='';
    opmain=op;
    op='';
    ans=operate(num1,num2,opmain);
    count=ans;
    const cont=document.createElement('div')
    const displayans=document.createElement('div');
    const clr2=document.querySelector('.answer');
    clr2.textContent="";
    displayans.textContent=` ${ans}`;
    cont.classList.add('displayans');
    cont.appendChild(displayans);
    one1.classList.add('cont');
    one1.appendChild(cont);
}
function numberD(){
  
    const one1=document.querySelector('.display');
    const display1=document.createElement('div');
    const num=parseInt(event.target.id);
    
    count+=event.target.id;
    display1.textContent=`${num}`;
    one1.classList.add('display1');
    one1.appendChild(display1);
}
function del(){
    count = count.slice(0, -1);
    const one1=document.querySelector('.display');
    one1.textContent=count;
}
function cleardisplay(){
    const clr=document.querySelector('.display');
    clr.textContent='';
    const clr2=document.querySelector('.answer');
    clr2.textContent="";
    count='';
}