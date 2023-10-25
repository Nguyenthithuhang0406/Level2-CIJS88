//BT1
/*
const str = prompt("Nhập chuỗi cần đảo: ");

// const reverseStr = (str) => {
//     let r_Str = "";
//     for(let i = str.length - 1; i >= 0; i++){
//         r_Str += str[i];
//     }
//     return r_Str;
// };

const reverseStr = str =>str.split('').reduce((r_Str, char) => char + r_Str, '');
const reversed = reverseStr(str);
Value = `Chuỗi sau khi đảo là: ${reversed}`;
this.document.write(Value);
*/


/*
//BT2
let input = prompt("Nhập vào một mảng, mỗi số cách nhau dấu phẩy: ");
let arr = input.split(",");
//let arr = [1, 2, 3, 5, 4, 2, 6];


// let result = [];
// for(let i = 0; i < arr.length; i++){
//     if(result.indexOf(arr[i]) === -1)   //neu chua ton tai trong result
//             result.push(arr[i]);
// }

const remove_arr = (arr) => [...new Set(arr)];
const result = remove_arr(arr);
this.document.write(`mảng sau khi chuẩn hoá là : ${result}`);
*/

/*
//BT3
let input = prompt("Nhập vào một mảng, mỗi số cách nhau dấu phẩy: ");
let arr = input.split(",");
//let arr = [1,1,2,3,2,4,5,2,1,3,4,2,1];

const n_arr = new Map();
let max = 0;
let key = 0;
arr.forEach((nums) => {
    if(n_arr.has(nums)){
        n_arr.set(nums, n_arr.get(nums) + 1);
    }else{
        n_arr.set(nums, 1);
    }

    if(n_arr.get(nums) > max){
        max = n_arr.get(nums);
        key = nums;
    }
});

this.document.write(`Số xuất hiện nhiều nhất là số ${key} với ${max} lần`);
*/