abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){

    }

   abstract getSepia(): void
   getReelTime(): number{
    //some complex calculation
    return  8
   }
}

//cannot create an object form abstract class

// const AJ = new TakePhoto("test","Test");

class Instagram extends TakePhoto{
    constructor(
        
        public cameraMode: string,
        public filter: string,
        public burst: number

    ){
        // super(cameraMode,filter) it is a common syntax
    }
    getSepia(): void{
        console.log("Sepia");
        
    }
}

const AJ = new Instagram ("test","Test",3);
