
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




