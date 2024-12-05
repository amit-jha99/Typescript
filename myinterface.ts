interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string//optional
    // startTrail: () => string 
    startTrail():string,
    getCoupon(couponname: string ,value: number): number

}

interface User{
    githubToken: string
}

//inheritence
interface Admin extends User{
    role: "admin" | "ta" |"learner"

}


const Amit: Admin = {dbId: 22, email: "xyz@gmail.com",userId: 2211,role: "admin",githubToken:"github" ,startTrail: ()=>{
    return "trail started"
},getCoupon:(name: "Amit12121999")=>{
    return 10
}}
Amit.email = "xyz123@gmail.com"
// Amit.dbId = 33456 // can't edit this because it's read only