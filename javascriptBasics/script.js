//named exports
//in named wxports function name is mandatory to give


export function Display(){
    console.log("displaying the name....");
    
}

export function add(n1,n2){
    return n1+n2;

}
//default exports
function subtract(n3,n4){
    return n3-n4;

}
//we can use only one default export inside an file.
// in this default keyword is used
export default subtract;
