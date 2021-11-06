function findSecondLowestAndGreatest(array)
{
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
   
  var first = [array[0]];
  var result = [];
  
  for(var j=1; j < array.length; j++)
  {
    if(array[j-1] !== array[j])
    {
      first.push(array[j]);
    }
  }
    result.push(first[1],first[first.length-2]);
  return result.join(',');
  }

console.log(findSecondLowestAndGreatest([50,10,30,20,40]));