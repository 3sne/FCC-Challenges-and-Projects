//A good lesson here was that doing let temp = arr2 didnt make new array, instead temp just referenced the same array ref. by arr2.
//However, using slice([index]), I was able to make two distinct arrays with same content.

function frankenSplice(arr1, arr2, n) {

  let temp = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    temp.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(arr2);
  return temp;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));