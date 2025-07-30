const input1 = document.getElementById("input1");

/*Takes string from input section of calculator and parses it into array*/
function parseData(value){
 
 let values = [] //array to put parsed values
 const len = value.length;
 let i = 0;
 let str = '';

 //checking one by one if the character is numeric, or operator
 while (i < len){
  //checking for empty spaces to skip
   if(value[i] === ' '){
      i++;
      continue;
   }
  //checking if the character is numerical
   else if(!isNaN(value[i])){
      str += value[i];
      i++;
      continue;
    }
   //checking for operator
   else if(str !== ''){
       switch(value[i]){
        case '+':
            values.push(parseInt(str));
            values.push('+');
            str = '';
            break;
        case '-':
            values.push(parseInt(str));
            values.push('-');
            str = '';
            break;
        case '*':
            values.push(parseInt(str));
            values.push('*');
            str = '';
            break;
        case '/':
            values.push(parseInt(str));
            values.push('/');
            str = '';
            break;
        case "%":
            values.push(parseInt(str)/100);
            // values.push('%');
            break;
    }}
    //checking if expression starts with minus
    else if(value[i] === '-' && str === ''){
      str += value[i];
    }   
    i++;
  }
  values.push(parseInt(str));
  return values;
 }
/* Calculates the value of expression; takes parsed array as an input*/ 
function calculate(value){
  let values = [];
  values = parseData(value);
  if(!values)
    return;
  let res = values[0];
  let len = values.length;
  let i = 1;
  while(i < len){
    switch(values[i]){
      case '+':
          res += values[i+1];
          break;
      case '-':
          res -= values[i+1];
          break;
      case '*':
          res *= values[i+1];
          break;
      case '/':
          res /= values[i+1];
          break;
  }   
    i += 2;
  }
  return res;
}

function erase(){
    input1.value=''
}

function displayInput(userInput){
    if(userInput === 'sqrt'){
    }
    else{
      input1.value += userInput;
    }
      
}

function showResult(){
    input1.value = calculate(input1.value)
}

function removeLastCharacter(){
  input1.value = input1.value.slice(0, -1);
}

function checkLastNumber(){
  const len = input1.value.length;
  let lastNumber = '';
  let i = len - 1;
  while (i >= 0 && !isNaN(input1.value[i])){
    lastNumber += input1.value[i];
    i --;
  }

  lastNumber = lastNumber.split('').reverse().join('');
  return lastNumber;
}



