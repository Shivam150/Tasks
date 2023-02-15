let n= 5;
let str = "";
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    { 
        str = str+"*";
    }
    str = str + "\n";
}
for(let i=1;i<=n;i++)
{
    for(let j=i;j<5;j++)
    {
      str = str+"*";
    }
    str = str+"\n";
}

console.log(str);