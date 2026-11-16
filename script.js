// class CustomMatch
// {
//     constructor(x)
//     {
//         this.x = x;
//     }
//     plus(y)
//     {
//         this.x += y;    
//         return this;
//     }
//     minus(y)
//     {
//         this.x -= y;
//         return this;
//     }
//     multiply(y)
//     {
//         this.x *= y;
//         return this;
//     }
//     divide(y)
//     {
//         this.x /= y;
//         return this;
//     }
//     result()
//     {
//         return this.x;
//     }
// }
// let customMatch = new CustomMatch(50);
// customMatch.plus(6).minus(30).multiply(3).divide(2);
// console.log(customMatch.result());



// let arr = prompt("arrayi daxil edin").split(" ").map(Number);
// arr.sort((a, b) => a - b);
// console.log(arr);



let str = prompt("string daxil edin");
function func(str)
{
    let arr = str.split(" ");
    return arr;
}
console.log(func(str));