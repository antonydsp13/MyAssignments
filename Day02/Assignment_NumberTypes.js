
function FindNumberType(x)
{
    if (x > 0) {
        console.log("The Given Number is " + x);
        return "Positive Number";
    } else if (x < 0) {
        console.log("The Given Number is " + x);
        return "Negative Number";
    } else if (x === 0) {
        console.log("The Given Number is " + x);
        return "Neutral";
    } else {
        console.log("Invalid input");
    }
}
let x = 0;
console.log(FindNumberType(x));


