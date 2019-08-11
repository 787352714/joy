/*给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 */

var twoSum = function(nums, target) {
  for(i=0; i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]===target){
        console.log(i,j)
      }
    }
  } 
};
twoSum([12,222,33,674,25,986,437,768,129],255)