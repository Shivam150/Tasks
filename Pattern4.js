let n =5;
let str = "";
for(let i =0;i<n;i++)
{
    for(let j=n;j>=i;j--)
    {
        str = str+"*";
    }
    str = str+"\n";
}
console.log(str);