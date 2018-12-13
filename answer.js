// *** YOUR ANSWER BELOW ***

function countdown(x){
let str = x + ", ";
let i = x;
  while(i > 1){
    i--;
    str += `${i}, `;
  }
  return str;
}

countdown(10);
