let n= 5;
let str = "";
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        if(i==1 || j==1 || i==n || j==i)
        {
            str = str+"*";
        }
        else {
                str = str+" ";
        }
    }
    str = str + "\n";
}

console.log(str);