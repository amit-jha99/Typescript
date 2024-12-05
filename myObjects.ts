// const User = {
//     name : "Amit Jha",
//     email :"xyz@gmail.com",
//     isActive : true
// }


// function createUser({name : string, isPaid: boolean}){


// }

// createUser({name: "Amit Jha",isPaid : false,email:"xyz@gmail.com"}) throwing an error
// let newUser = {name : "Amit",isPaid : false,email: "xyz@gmail.com"}//not throwing an error
// createUser(newUser)







// function createCourse(): {name: string, price: number}{
//     return {name :"reactjs", price : 399}

// }



//kind of creating data type
// type User = {
//     name: string,
//     email : string,
//     isActive : boolean
// }

// type Mystring = string  wierd

// function createUser(user: User): User{
//     return {name: " ",email: " ", isActive : true}

    

// }

// createUser({name: " ",email: " ",isActive : true})

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails ? : number
}

let myUser: User = {
    _id: "12345",
    name:"Amit Jha",
    email: "xyz@gmail.com",
    isActive: false

}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}





myUser.email = "hello@gmail.com"
// myUser._id ="Amitjha"
export {}