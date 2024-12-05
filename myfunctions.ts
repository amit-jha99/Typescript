function addTwo(num: number): number{
    return num+2;
    // return "hello";
}

function getUpper(val: string){
    return val.toUpperCase()
}


function signUpUser(name: string , email:string,isPaid:boolean){

}

let loginUser = (name:string, email: string, isPaid:boolean = false)=>{


}
// addTwo(5);
let myValue = addTwo(5)
getUpper("Amit")
signUpUser("Amit","xyz@gmail.com",true)
loginUser("Amit","xyz@gmail.com");

// function getValue(myVal: number): boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string=>{
    return  ""
}

const heros =[1,2,3];

// const heros =["thor","spiderman","Ironman"]

heros.map((hero): string=>{
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);

    
}


// The never return type indicates that this function never successfully returns.

function handleError(errmsg: string): never{
    // console.log(errmsg);
    throw new Error(errmsg);

    
}

export{}