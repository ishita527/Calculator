let values = []
function calculate(value){
  values = [];
  parseData(value);
  console.log(values);
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
  
function parseData(value){
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
 }


function digit(data){
  if (parseInt(data) >=0 && parseInt(data) <=9)
    return true;
  else
    return false;
}

function erase(){
    const input1 = document.getElementById("input1");
    input1.value=''
}

function inputBoxData(userText){
    const input1 = document.getElementById("input1");
    input1.value += userText;
}

function showResult(){
    const input1 = document.getElementById("input1");
    input1.value = calculate(input1.value)
}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

erase();

