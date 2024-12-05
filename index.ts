
// class User{

//     //everything that you dont' mark is public automatically
//    public email: string 
//     name: string //automatically marked public
//    private readonly city:string = ""
//     constructor(email: string,name:string){
//         this.email= email;
//         this.name = name;
//         this.city 
//     }
// }


//In production we write like this
class User{
    // private _courseCount =1
    protected _courseCount =1//accessible in this class as well as the class which inherit this class

    readonly city: string ="Mumbai"
    constructor(
        public email: string,
        public name:string,
        // private userId:string

    ){
         
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User{
    //it cannot acquire property which is mentioned as private
    isFamily: boolean = true
    changeCourseCount(){
         this._courseCount = 4
    }
}

const Amit = new User("xyz@gmail.com","Amit");
// Amit.city = "Mumbai" //can't access here because it is private marked it can only be used within class
// Amit.deleteToken()