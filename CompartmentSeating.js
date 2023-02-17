const prompt = require("prompt-sync")();
let Fseat = parseInt();
 let  seatNo = parseInt(prompt("Enter Seat Number: "));

    if((seatNo % 12) === 1 || (seatNo % 12) === 0)
    {
        if((seatNo % 12) === 0)
        {
            Fseat= seatNo - 11;
            console.log("WS",Fseat);
        }
        else
        {
            Fseat = seatNo + 11;
            console.log("WS",Fseat);
        }
    }
    else if ((seatNo % 12) === 6 || (seatNo % 12 )=== 7) 
    {
        if((seatNo % 12 )=== 6)
        {
            Fseat = seatNo+1;
            console.log("WS",Fseat);
        }
        else{
            Fseat = seatNo-1;
            console.log("WS",Fseat);
        }  
    } 
    else  if((seatNo % 12) === 5 || (seatNo % 12 ) === 8)
    {
        if((seatNo % 12) === 5)
        {
            Fseat = seatNo+3;
            console.log("MS",Fseat);
        }
        else{
            Fseat = seatNo-3;
            console.log("MS",Fseat);
        }  
    }
    else if((seatNo % 12) === 2 || (seatNo % 12) === 11)
    {
        if((seatNo % 12) === 2 )
        {
            Fseat= seatNo+9;
            console.log("MS",Fseat);

        }
        else{
            Fseat = seatNo-9;
            console.log("MS",Fseat);
        }
    }
    else if((seatNo % 12 ) === 3 || (seatNo % 12 ) === 10)
    {
        if((seatNo % 12) === 3)
        {
            Fseat = seatNo+7;
            console.log("AS",Fseat);
        }
        else{
            Fseat = seatNo-7;
            console.log("AS",Fseat);
        }
    }
    else
    {
        if((seatNo % 12) === 4)
        {
            Fseat = seatNo+5;
            console.log("AS",Fseat);
        }
        else
        {
            Fseat = seatNo-5;
            console.log("AS",Fseat);
        }
    }
