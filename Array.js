function arrayPlusArray(arr1, arr2) {
    // return arr1.concat(arr2).reduce((acc,val)=> acc+val, 0)
  const sum1 = arr1.reduce((acc, val) => acc + val, 0);
  const sum2 = arr2.reduce((acc, val) => acc + val, 0);
  return sum1 + sum2;
}
const result = arrayPlusArray([1, 2, 3], [4, 5, 6]);
console.log(result);