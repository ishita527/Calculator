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

/*Takes string from input section of calculator and parses it into array*/
function parseData(value){
 let values = []
 const len = value.length;
 let i = 0;
 let str = '';
 while (i < len){
   if(digit(value[i])){
      str += value[i];
      i++;
      continue;
    }

    else{
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
    }}   
    i ++;
  }
  values.push(parseInt(str));
  return values;
 }


function digit(data){
  if (parseInt(data) >=0 && parseInt(data) <=9)
    return true;
  else
    return false;
}

const input1 = document.getElementById("input1");

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

