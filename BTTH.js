//BT1
const nameValue = prompt("Enter input Name: ");
const ageValue = prompt("Enter input Age: ");

getValue();
function getValue(){
    const getValue = getElementById('content');
    //getValue.innerHTML = "aaa";
    getValue.innerHTML = `Hello My name is ${nameValue} and Age is ${ageValue}`; 
}

/*
//BT2
const person = {
    name: "age",
};

//3 cach them age: 18 vao person
//person.age
//...

//answer
//cach 1:
person.age = 18;
console.log(person);

//cah 2
person["age"] = 18;
console.log(person);

//cach 3
const person2 = {...person, age: 18};
console.log(person2);

//cach 4
Object.assign(person, {age: 18});
console.log(person);

//BT3
{
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    catelogy: "men's clothing",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

//entity doesn't has key 'idfdfdfdffdfdf'
const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and
     walks in the forest. Stash your laptop 
     (up to 15 inches) in the padded sleeve, 
     your everyday",
     catelogy: "men's clothing",
     image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const excludeKeyObject = (entity, key) => {

    if(key in entity) { //if(!entity[key]){
        delete entity[key];
    }else{
        console.log(`entity doesn't has key '${key}'`);
    }

};

excludeKeyObject(product, 'idd');
console.log(product);
*/