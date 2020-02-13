/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
console.time('map');
function modifyArray(nums) {
  return nums.map(n => n % 2 ? n * 3 : n * 2); 
}
console.log(modifyArray([1, 2, 3, 4, 5]));
console.timeEnd('map');

// for loop
console.time('for loop');
function modifyArrayX(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0)
      nums[i] * 2;
    else
      nums[i] * 3;
  }
  return nums;
}
console.log(modifyArray([1, 2, 3, 4, 5]));
console.timeEnd('for loop');