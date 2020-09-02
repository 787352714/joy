/*给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 */

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i, j)
      }
    }
  }
};
twoSum([12, 222, 33, 674, 25, 986, 437, 768, 129], 255)

//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// var lengthOfLongestSubstring1 = function(s) {
//   arr=s.split('')
//   let res=[arr[0]]
//   for(let i=1;i<arr.length;i++){
//     if(arr[i]===arr[i-1]){}
//   }
//   console.log(res.length)
//   return res.length
// };
// lengthOfLongestSubstring1("pwwkew")

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

/**
 * @param {number} x
 * @return {number}
 */
//待优化
var reverse = function (x) {
  let n = Math.abs(x)
  let arr = String(n).split('').reverse().join('');
  let num = Number(arr);
  if (x < 0) {
    num = -num;
  }
  var bigInt = Math.pow(2, 31)
  if (num >= -bigInt && num <= (bigInt - 1)) {
    return num;
  } else {
    return 0
  }
};

// /判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if(x===0)return true;
  if(x<0||x%10===0) return false;
  let newNum = 0;
  let oldNum = x;
  while(oldNum>0){
    let s = oldNum%10;
    newNum = newNum*10+s;
    oldNum = (oldNum-s)/10;
  }
  return newNum===x
};

//给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

};

//编写一个函数来查找字符串数组中的最长公共前缀。
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length<1){
      return ""
  }
  return strs.reduce((curr,next) =>{
    while(curr.length){
      if(curr===next.slice(0,curr.length)){
        break;
      }else{
        curr = curr.slice(0,curr.length-1)
      }
    }
    return curr;
  })
};

//有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */

let symbolObject = {
  smallLeft:"(",
  smallRight:")",
  mediumLeft:"[",
  mediumRight:"]",
  largeLeft:"{",
  lagerRight:"}"
}

let isValid = function(s) {
   if(!s.length%2){
     return false;
   }
   let arr = s.split('');
   let result = true;
   for(let i=1; i<arr.length; i++) {
    let key =  Object.keys(symbolObject).find(item=>arr[i]===symbolObject[item]);
    let keyNext =  Object.keys(symbolObject).find(item=>arr[i-1]===symbolObject[item]);
    
   }
};

//实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  let testArr = haystack.split(needle);
  if(testArr.length>1){
    return testArr[0].length;
  }else{
    return -1
  }
};

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let result = nums.length;
  for (let i =0; i<nums.length; i++){
    if(nums[i]===target){
      result = i;
      break;
    }else if(nums[i]>target){
      result = i-1<0?0:i-1;
      break;
    }
  }
  return result;
};
//第二种解法
var searchInsert = function(nums, target) {
  for(var q = 0;target > nums[q];q++){}
  return q
};