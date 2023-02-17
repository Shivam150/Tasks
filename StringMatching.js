const prompt = require("prompt-sync")();

let E = prompt("Enter Expression: ");
let l = E.length;
if(isBalanced(E))
{
    console.log("Balanced");
}
else{
    console.log("Not Balanced");
}



function isBalanced()
{
    let arr = [];
    for(let i =0;i<l;i++)
    {
      let c = E[i];
      if(c == "(" || c=="{" || c == "[")
      {
        arr.push(c);
        continue;
      }
      if(arr.length==0)
      {
        return false;
      }

      let find ;
    switch(c){
        case ')':
            find = arr.pop();
            if(find == '{' || find == '[')
            {
               return false;
            }
            break; 
            
        case '}':
            find = arr.pop();
            if(find == '(' || find == '[')
            {
                return false;
            } 
            break;
            
        case ']':
            find = arr.pop();
            if(find == '(' || find == '{')
            {
                return false;
            }  
            
            break;
    }

   } 
   return (arr.length==0);

}


