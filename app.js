//c1
// function heavyLogic(a, b){
//     return a+b;
// }

//c2
// const heavyLogic = (a, b) =>{
//     return a+b;
// }

//ex1: khong ho tro khai bao truoc
// logger();
// function logger(){
//     console.log("Mindx technology school");
// }
// logger();

// const logger = () =>{
//     console.log("MindX technology school");
// }

//ex2
// const person = {
//     name: "MindX",
//     age: 20, 
//     sayHello: () => {
//         console.log(this);
//         console.log("say Hello" + " " + this.name);
//     },
// };

//person.sayHello();

// const name = "MindX";
// const address = "Hanoi";

// console.log("Hello my name is " + name + " address : " + address);
// console.log(`Hello my name is ${name} , address : ${address}`);

// import logger from "./helper.js";   //nhap khau
// logger("My message");
//console.log(sum(2,3));

// const person = {
//     name: "MindX";
//     age: 18,
//     address: "HN",
//     postCode: "1111",
//     rich: false,
//     house: false,
//     car: false,
//     girlFriend: false,
// };

// const anotherPerson = {
//     age: person.age,
//     address: person.address,
// };

// const {name, ...rest} = person; //coppy tu person, tru name

// console.log(name);
// console.log(rest);

//const nums1 = 10;
//const nums2 = 10;

//console.log(nums1 ===nums2);   //false;   vi no so sanh 2 dia chi , nen khac nhau

//magic 1

// const nums1 = 10;  //10
// const nums2 = 10; //10

// console.log(nums1 === nums2);   // true

// const person = {
//     name: "MindX",
//     age: 19,
// };  // luu vao dia chi oxyz....
// const person2 = {
//     name: "MindX",
//     age: 19,
// };  //12dsdsdd...
// console.log(person === person2);  //false; neu la == thi true

//magic 2

// const person = {
//     name: "MindX",
//     age: 19,
// };  //abc

// const duplicatedPerson = { ...person };  //xyz, sao chep, khi thay doi gia tri se khong anh huong ban goc
// duplicatedPerson.name = "MindX technology school";
// console.log(duplicatedPerson);
// console.log(person);

//nguyen thuy
// let nums1 = 10; //10
// let duplicatedNums1 = nums1; //10

// duplicatedNums1 = 10000;
// console.log(duplicatedNums1); //10000

// console.log(nums1);  //10

// const nums1 = [1, 3]; //abc
// const nums2 = [...nums1]; //xyz
// nums2.push(4); // const khong the thay doi gia tri nhung co the push

// console.log(nums2); //[1,3,4]
// console.log(nums1); //[1,3]

// for(let i = 0; i <= arr.length - 1; i++){
//     console.log(arr[i]);
// }

//higher order function? tu tim hieu

//forEach: don gian la lap qua j cac phan tu
//arr.forEach((item, index) => console.log(item, index));

//filter -> tra ra 1 mang moi chua nhung phan tu thoa man voi dieu kien
// const filterArr = arr.filter((item, index) =>item > 4);
// console.log(filterArr);

//map: tra ra 1 mang moi -> dua vao cai tinh chat
// const newArr = arr.map((item, index) => item * 3);
// console.log(newArr);

//every: tra ra boolearn dua vao cac phan tu co thoa man hay khong
//const result = arr.every((item, index) =>item > 0);

//some: tra ra boolean dua vao ci can mot phan tu thoa man
//const result = arr.some((item, index) => item > 300);

//find: tra ra 1 phan tu dau tien thoa man
// const result = arr.find((item) => item > 3);
// console.log(result);

//reduce 
// const arr = [1,2,3,4,5,6];
// const result = arr.reduce(
//     (previousValue, currentItem) => previousValue + currentItem, 0
// );
// console.log(result);

// const arr = [
//     ["name", "MindX"],
//     ["age", 18],
//     ["address", "Hanoi"],
// ];

// {
//     name: "MindX",
//     age: 18,
//     address: 'Hanoi'
// }

// const result = arr.reduce(
//     (previousValue, currentItem) => ({
//         ...previousValue,
//         [currentItem[0]]: currentItem[1],
//     }),
//     {}
// );
// console.log(result);

// const person = {
//     name: "MindX",
// };

// person.age = "19";
// console.log({...person age: "19"});

//destructing

const person = {
    name: "MindX",
    age: 18,
};

const {name, age} = person;
console.log(name);
console.log(age);










