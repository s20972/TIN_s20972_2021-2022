
let recursive = function (arr, x, start, end) {
      
    if (start > end) return false;

    let mid=Math.floor((start + end)/2);
  
    if (arr[mid]===x) return true;
         
    if(arr[mid] > x)
        return recursive(arr, x, start, mid-1);
    else
 
        return recursive(arr, x, mid+1, end);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let x = 5;
console.log("Initial array is : " + arr);

if (recursive(arr, x, 0, arr.length-1))
    console.log(x + " is found");
else console.log(x + " isnt found");
  
x = 11;
  
if (recursive(arr, x, 0, arr.length-1))
    console.log(x + " is found");
else console.log(x + " isnt found");
