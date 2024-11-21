//named exports

export function Display(){
    console.log("displaying the name....");
    
}

export function add(n1,n2){
    return n1+n2;

}
function subtract(n3,n4){
    return n3-n4;

}
//we can use only one default export inside an file.
export default subtract;