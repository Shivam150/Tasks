const { userInfo } = require("os");
const { exit } = require("process");

const prompt = require("prompt-sync")();
let userinput ;
const luckyNumber = Math.floor(Math.random()*10);

function getLuckyNumber(userinput)
{
  for(let i=0;i<2;i++)
  {
   userinput = Math.floor(Math.random()*10);
  console.log("Your LuckyNumner Is : ",luckyNumber);
  prompt("press Enter to Start -> ");
  console.log("Your Generated Numner is : ",userinput);
  if(userinput==luckyNumber)
    {
      console.log("You've won : ", luckyNumber);
      break;
      
    }
  else{
    console.log("Sorry! you've Not Won!");

  }
  }
}




    
    prompt("Press Enter to Gererate LuckyNumber");
     getLuckyNumber(userinput);


console.log("Game End!");



