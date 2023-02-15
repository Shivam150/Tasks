const prompt = require("prompt-sync")();


let str = prompt("Enter String: ");

let exp = '“( )”';

if(str===exp)
{
    console.log("Balanced");
}
else{
    console.log("Not Balanced");
}