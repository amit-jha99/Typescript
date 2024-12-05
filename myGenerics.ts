const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}




function identityTwo(val: any):any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val 
}

identityThree("3")


function identityFour<T>(val:T):T{
    return val

}

interface Bottle{
    brand:string,
    type:number

}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T{
    // do some database operations

    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts= <T>(products: T[]):T =>{
    //do some databas operations
    const myIndex = 4
    return products[myIndex]

}


function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

interface Database {
    connection: string,
    username: string,
    password:string
}

// anotherFunction(3,{})

interface Quiz{
    name: string,
    type:string
}

interface Course{
    name: string,
    author:string,
    subject: string
}

class Sellable<T>{
    public cart: T[] =[]
    addToCart(products: T){
        this.cart.push(products)
    }
}
