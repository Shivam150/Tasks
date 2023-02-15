let nums = [1,1,1,1];
let count =0;
GoodPair(nums);
function GoodPair(nums){
for(let i=0;i<4;i++)
{
    for(let j=i+1;j<4;j++)
    {
        if(nums[i]==nums[j])
        {
          count++;
        } 

        
    }
}
console.log(count);
}