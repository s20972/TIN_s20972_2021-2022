function fibonacci(n){ 

  var result = 0 
  if(n<=2){ 
    return n-1;
    } 
  result = fibonacci(n-1) + fibonacci(n-2);
  return result;
        }
console.log(fibonacci(8));