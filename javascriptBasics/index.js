
//very important for React
//Array Destructuring

//Example-1
let arr = [10,20,35,21,6,563,];
let [a,b,c,d,e,f] = arr;
console.log(a);
console.log(f);
console.log(d);
console.log();

//exanple-2

// let arr2 = [10,20,30,40,50,60];
// let [p,q,r,t] = arr2;
// console.log(p,t);

let arr2 = [10,20,30,40,50,60];
//jis value ka kaam nhi hai uss par comma dal kar skip kar denge 
//otherwise unwanted menory consume hogi
let [,q, ,t, ,] = arr2;
console.log(q,t);


//Example-3
let arr3 = [10,["hello",[30,[67,"hii"],["bye"]],90]];

let [,[l,[,[,m],[o]]]] = arr3;
console.log(l,m,o);

//output-> hello hii bye
//note -> jis value ko nhi lena hai usko skip kar denge uss pe variable assign nhi karenge 

//Object destructing

let obj1 = {
    id:1,
    title:"laptop",
    brand:"Asus",
    price:45000
};
let {title} = obj1;
console.log(title);

let {brand} = obj1;
console.log(brand);


//Exmaple-2

let obj2 = {
    id:1,
    title2:"laptop",
    brand:"Asus",
    price:45000,
    rating:{
        rate:5,
    }
};

let{title2,rating:{rate}} = obj2;
console.log(rate);


// making a variable key for an object 
let x = "designation";
let obj3={
    id:1,
    ename:"john",

};
let obj4 ={
    ...obj3,
    company:"google",
    salary:650000,
    [x]:"Developer",
};

console.log(obj4);

//-->modules

//we have to use the import keyword only inside the module if we try to access the import without creating a module it gives an error


//we can change nameed exports function name using 'as' keyword after importing by same name.
import { Display as disp,add} from "./script.js";

// Display();
disp();

let val = add(45,67);
console.log(val);


//named Exports

import subtract from "./script.js";
let result1=subtract(34,24);
console.log(result1);




