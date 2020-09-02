export interface IActivity
{
       //the interface is created because in app.tsx when we make a list of values
       //the compiler does not give any warnings so we introduce an 
       //activity interface to give us compiler errors if we try to use any non activity values
        //interfaces are solely used for type checking so used for strong typing rather than creating a class
       id : string;
     name : string;
     description : string;
     amount:string;
     noOfAcres:string;
     location:string;
     date:string;
     status:string;   
}