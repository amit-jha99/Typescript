let score : number | string  = 33 
score  = 44 
score = "55"


type User = {
    name: string,
    id: number
}


type Admin = {
    username : string

    id: number
}

let amit: User  | Admin = {
    name : "Amit",
    id :334
}

amit  = {username: "aj",id: 334}

// function getDbId(id: number| string){
//     //making some API calls 
//     console.log(`DB id is : ${id}`);
    
// }


getDbId(3)
getDbId("3")

function getDbId(id: number| string){
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }
    
}


//array
const data: number[] =[1,2,3]
const data2: string[] = ["1","2","3"]

//This is a classic mistake
// const data3: string[] | number[] =["1","2","3"]


// though this is not recommeded
const data3: (string | number) [] = ["1","2",3]


// let pi: 3.14 = 3.14
// pi = 3.145



// example of more secure type value
// let seatAllotment: "aisle" | "middle" | "window"

// seatAllotment = "aisle"
// seatAllotment = "crew"
