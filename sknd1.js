
    var s = "5F3Z-2e-9-w";
    let k=3;
     s = s.replace(/-/g,'');
     s = s.toUpperCase()
    let fsgt = s.length%k;
    if(fsgt == 0)
    {
     fsgt=k;
    }

    let res = '';
    res += s.substring(0,fsgt);

    for(let i = fsgt; i<s.length;i+=k)
    {
        res += '-';
        res +=s.substring(i,i+k);
    }
    console.log(res);

   