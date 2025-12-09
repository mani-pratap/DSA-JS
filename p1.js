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
