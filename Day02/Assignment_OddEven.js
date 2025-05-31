
function isOddOrEven(x)
{
    let OddorEven= x % 2===0
    if(OddorEven===true)
    {
       console.log("The Given Number is "+x);
       return"The Given Number is Even"
        
    }
    else{
         console.log("The Given Number is "+x);
         return"The Given Number is Odd"
    }
}
let x = Math.floor(Math.random() * 100)
console.log(isOddOrEven(x));
