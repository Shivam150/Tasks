let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n-i ; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i-1 ; k++) {
    if(i==1|| i==n ||k==0 || k==2*i-2)
    {
        str = str+"*";
    }
    else{

            str = str+" ";
    }
  }
 str += "\n";
}
console.log(str);