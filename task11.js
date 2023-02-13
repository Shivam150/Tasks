const { userInfo } = require("os");
const { exit } = require("process");

const prompt = require("prompt-sync")();

const luckyNumber = Math.floor(Math.random()*10);

function getLuckyNumber(userinput)
{
  
  console.log("Your LuckyNumner Is : ",luckyNumber);
  prompt("press Enter to Start -> ");
  console.log("Your Generated Numner is : ",userinput);
  if(userinput==luckyNumber)
    {
      console.log("You've won : ", luckyNumber);
    }
  else{
    console.log("Sorry! you've Not Won!");

  }
  
}


for(var i =0;i<2;i++)
{
    if(i==0)
    {
    let userinput = Math.floor(Math.random()*10);
    prompt("Press Enter to Gererate LuckyNumber");
    getLuckyNumber(userinput);
    }

    

    if(i==1)
    {
    prompt("press enter to try again: ")
    let userinput = Math.floor(Math.random()*10);
    getLuckyNumber(userinput);

    }

}


console.log("Game End!");



