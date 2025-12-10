// let a = 10;
// let b = 20;
//
// // a = a+b //30
// // b = a-b //10
// // a = a-b // 20
//
// // [a, b] = [b, a]; // array destructuring
//
//
//
// console.log(a);
// console.log(b);

//  countong frquency ----------------- with extra space
//
// function Count_func(arr) {
//   count = {};
//   for (let x of arr) {
//     //  x = 10
//     // count{10: ?}
//     count[x] = count[x] === undefined ? 1 : count[x] + 1;
//   }
//   return count;
// }
//
// // console.log(Count_func([10, 10,"20", "apple", 30, 20, 10, 40]));
//
// let str = prompt("enter any string");
// console.log(str);
// let arr = str.split("");
// console.log(arr);
//
// console.log(Count_func(arr));

// -----Count freq -------------- using
//  Character Frequency Counting Using ASCII Indexing
//
// let s = "anbcsa";
// let arr = new Array(128).fill(0);
//
// for (let ch of s) {
//   arr[ch.charCodeAt(0)]++;
// }
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i), "->", arr[i]);
//   }
// }

// Method 2: Store Unique Characters in an Array in Order and count Freqency using ASCII indexing
//
// let s = "hello";
// let freq_arr = new Array(128).fill(0);
// let unique = [];  // order maintain karega acc to string h>e>l>o
//
// // Count frequency and maintain order
// for (let ch of s) {
//   let Ascii_code = ch.charCodeAt();
//
//   freq_arr[Ascii_code] += 1;  // [0>1 , 1>2]
//
// 	if (freq_arr[Ascii_code] === 1) {
//     unique.push(ch); // store only first time  // [h,e,l,o]
//   }
// }
//
// // Print according to order in unique[]
// for (let ch of unique) {
//   console.log(ch, "->", freq_arr[ch.charCodeAt()]);
// }

// revision =============>
//
// let s = "unique";
//
// freqCount(s);
//
// function freqCount(s) {
//   let arr = new Array(128).fill(0);
//   let unique = [];
//
//   for (let el of s) {
//     let code = el.charCodeAt();
//     arr[code] = arr[code] + 1;
//
//     if (arr[code] == 1) {
//       unique.push(el);
//     }
//   }
//
//   for (let el of unique) {
//     console.log(`${el} appears ${arr[el.charCodeAt()]} times`);
//   }
// }

// Array Rotation using Extra space --------------------------

// ✅ Left Rotation by k – Formula
//
// Left rotation me har element ko k steps left move karna hota hai.
//
// Formula:
//
// temp[i] = arr[(i + k) % n]
// 🟦 Example
//
// arr = [1,2,3,4,5], k = 2
//
// Left rotate result: [3,4,5,1,2] ------------

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);  //extra space
// let k = 2;  // Kth time rotation
//
// k = k % arr.length;  //optimise
//
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];  //0+2 = 2 % 5 = 2 => arr[2]
// }
//
// console.log(temp);

// _________ Right Rotaioin -------------with extra space---------

// let arr = [2, 3, 4, 5, 1];
// //  2 time right rotation >> [5,1,2,3,4]
//
// let k = 2;
//
// k = k % arr.length;
// let temp = [];
//
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i - k + arr.length) % arr.length];
// }
//
// console.log(temp);

// 🔥 Explanation (short)

// (i - k) = element ko right shift karna  or piche se aage lane k liye
//
// + arr.length = negative index avoid
//
// % arr.length = circular rotation or array bound exception s bachne k liye

// -------------Left - Rotaion // without extra space------
//
// function left_rotaion(arr, k) {
//   function reverse(i, j) {
//     while (i < j) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//
//       i++;
//       j--;
//     }
//   }
//
//   reverse(0, k - 1);
//   reverse(k, arr.length - 1);
//   reverse(0, arr.length - 1);
//
//   return arr;
// }
//
// arr = [1, 2, 3, 4, 5];
// k = 2; // 2 time rotaion
//
// console.log(`left rotaion of [${arr}] is : `, left_rotaion(arr, k));

// o/p: left rotaion of [1,2,3,4,5] is :  (5) [3, 4, 5, 1, 2]
// extra space =>
// temp[i] = arr[(i + k) % arr.length];  //0+2 = 2 % 5 = 2 => arr[2]

// / ------Right-Rotaion // without extra space using pointer ------

// function right_rotaion(arr, k) {
//   const reverse = (i, j) => {
//     while (i < j) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//
//       i++;
//       j--;
//     }
//   };
//
//   // main logic
//   reverse(0, arr.length - 1);
//   reverse(0, k - 1);
//   reverse(k, arr.length - 1);
//
//   return arr;
// }
//
// arr = [1, 2, 3, 4, 5];
// k = 2; // 2 time rotaion
//
// console.log(`Right rotaion of [${arr}] is : `, right_rotaion(arr, k));

// o/p :
// Right rotaion of [1,2,3,4,5] is :  (5) [4, 5, 1, 2, 3]

// <-- extra space =>
//  temp[i] = arr[(i - k + arr.length) % arr.length];

// -------------Count unique Element in Array /Remove duplicate Element in sorted Array --------------

// function Unique_Array(arr) {
//   let j = 1;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] != arr[i + 1]) {
//       arr[j] = arr[i + 1];
//       j++;
//     }
//   }
//
//   return { arr, j };
// }
//
// let arr = [0, 1, 1, 2, 2, 3, 4, 5];
// let result = Unique_Array(arr);
//
// console.log(
//   `[${arr}] remove duplicate : ${result.arr} and unique Element ${result.j}`
// );

// o/p : [0,1,2,3,4,5,4,5] remove duplicate : 0,1,2,3,4,5,4,5 and unique Element 6

// 2 pointer hoye h j tab badta h jab unique element milta h , first element ko unique man k chalte h
// isliye j =1 s start karte arr[0] already uniqur h
// arr[j] = arr[0+1..] >> return m j karte to hame proper unique element k ciunt bhi mil jata h

// Merge sorted Array

// let arr1 = [1, 2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let merge = [];
//
// let i = (j = k = 0);
//
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k] = arr1[i];
//     k++, i++;
//   } else {
//     merge[k] = arr2[j];
//     k++, j++;
//   }
// }
//
// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }
// console.log(merge);

//0/0 :  (8) [1, 1, 2, 3, 4, 5, 6, 8]   //non-decrement bcoz

//121. Best Time to Buy and Sell Stock ------------------------
// Input: prices = [7, 1, 5, 3, 6, 4];
// Output: 5;
//
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let maxprofit = 0;
//     let min=prices[0];  //7
//     for (let i=1;i<prices.length;i++){ //prices[i] => 1, 5,3,6
//         if(prices[i]<min) min = prices[i];   // min => 1
//         let profit = prices[i] - min;  //0,4,2,5
//         if(profit>maxprofit) maxprofit=profit  //maxprofit => 0,4,5
//     }
//     return maxprofit
// };

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
//
// /**
//  * @param {number[]} nums  = [0,0,2,1,1,2]
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//
// // [2,0,1] => [1,0,2] => [0,1,2]
//
// var sortColors = function(nums) {
//     let j=0   // 0,1
//     let k=nums.length-1; //2,1
//
//     for(let i=0;i<=k;i++){   //i => 0,0,1,2#
//         if(nums[i]==0){
//             // swapping
//             [nums[i],nums[j]] = [nums[j],nums[i]]
//             j++
//         }else if(nums[i] == 2){
//             // swapping
//             [nums[i],nums[k]] = [nums[k],nums[i]]
//             k--
//             i--  // -1
//         }
//     }
// };

// -----------------------------
//
// 53. Maximum Subarray
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
//
// Example 1:
//
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   let sum = 0;
//   let maxSum = -Infinity;
//
//   for (i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//     if (sum > maxSum) maxSum = sum;
//     if (sum < 0) sum = 0;
//   }
//   return maxSum;
// };
