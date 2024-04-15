




// let z;
// z=true

// let x = 10
// let y:string='kaywan'

// let arr1= [1,2] 
// let arr2:string[]= ['k','b'] 

// enum color {red, blue, green}

// let arr3:[number,boolean,string,number]=[1,true,'kaywan',8]
// let arr4:[number,boolean,number]
// arr4=[1,false,4]
// // *****************************
// let a:number|string=12
// a='k'
// a=true


// let arr5 = [1,'k']

// arr5 = [5,6,'a',56]
// arr5 = [5,6,'a',false]







// let a:string|number=10
// let b:string|number='k'
//error : let z:string|number=true


// type k = string|number|boolean

// let a:k=10
// let b:k='k'
// let z:k=true


// function sum(x:number, y){
//     return x + y
// }


// console.log(typeof sum);




// let add:(y)=>number = sum

// console.log(add('4',4));



// let divElement = document.querySelector('p')


// let pElement = document.querySelector('.p1') as HTMLParagraphElement


// let formElement = document.getElementById('form1') as HTMLFormElement


// formElement.addEventListener('submit',(ev:Event)=>{
//     ev.preventDefault()
//      console.log('true');
     
// })



// let divElement = document.querySelector('div')

// let divElement = document.querySelector('div') as HTMLDivElement
// let divElement = document.querySelector('div')!


// console.log(divElement?.innerHTML);




// *************************** video 13 to 20 **********************

// class Person{

//    constructor(
//     public id:number,
//     public name:string,
//     public age:number,
//     public userName:string,
//     public password:string,
  
//     ){}

//    getPerson(lastName:string){
//     // this.age = 29
//     let x = 10
     
//     return `age : ${this.age}  and  lastname : ${lastName} and  id : ${this.id}`
//    }
// }
// let person = new Person(1, 'kaywan', 30, 'kaywan2821', 'km2821')
// console.log('person = ',person);
// console.log('person.getPerson() = ',person.getPerson('jalali'));








// class Machine{
//    constructor(public price:number, protected color:string){}

//    getDetailCar(){
//       console.log(`color : ${this.color}  /   price = ${this.price}`);
      
//    }
// }


// class Car extends Machine{
      
//    constructor(private model:string,  price:number, color:string){
//       super(price, color)

//    }
    
//     getDetailCar(){
//       console.log(`model : ${this.model}  / color : ${this.color}  /   price = ${this.price}`);
      
//    }

//   get getModelCar(){
//       return this.model
//    }

//    set setModelCar(model:string){

//          this.model = model
//    }
// }
// let car1 = new Car('206', 4_500_000, ' white')
// car1.getDetailCar()
// car1.setModelCar = '405'
// console.log(car1.getModelCar);










// class Print{
//   static flag = true

  
//    test(){
//       //error :  console.log(this.flag);
//       // error this.printName('test')
      
//    }


//   static printName(name:string){
//        console.log(name);
//        console.log(this.flag);
       
//    }
// }


// let p = new Print()
// //error :  p.printName('kaywan)
// //error :  p.flag

// Print.printName('kaywan')
// Print.flag












// abstract class Machine{

//    abstract  country:string;

//    constructor(public price:number, protected color:string){}

//    getDetailCar(){
//       console.log(`color : ${this.color}  /   price = ${this.price}`);
      
//    }

//    abstract  test():string;
// }


// class Car extends Machine{
//     country = 'iran'
      
//    constructor(private model:string,  price:number, color:string){
//       super(price, color)

//    }
//     getDetailCar(){
//       console.log(`model : ${this.model}  / color : ${this.color}  /   price = ${this.price}`);
      
//    }

//    test(){
//       return 10;
      
//    }

// }








// interface Machine{
//     color:string;
//     price:number;

//     getDetailCar():void;
// }



// let obj:Machine={
//    color:'red',
//    price:100000,
   
//    getDetailCar(){

//    }

// }











// interface Machine{
//    readonly color:string;
//     price?:number;
    

//     getDetailCar?():void;
// }

// class Car implements Machine{
//   name='kaywan'
//    constructor(
//         public  color:string ,
//       //   public price:number
//    ){}

//    getDetailCar(): void {
//       console.log(this.price);
     
//    }

// }



// type func = (a:number, b:number)=>number

// interface fu {
//    (a:number, b:number):number
// }



// let sum:fu=(num1:number, num2:number):number=>{


//    return num1 + num2

// }


// console.log(sum(10, 2));



// interface A{
//    a:number;
// }

// interface B{
//    b:number;
// }

// interface C extends A, B{
//    c:number;
// }


// class Car implements C{
//    a=1
//    b=2
//    c=3
// }
















































// *************************** video 21 to 25 **********************





// function loggingIdentity<T>(arg1:T, arg2:T):T {
     
     
//      return 2 as T
//   }




// let arg= loggingIdentity(1,2)

// console.log(arg);











// function generic<T extends string | number>(value: T):(string | number){
       
      
//      return value
// }

//    let result =  generic('name');
//    console.log(result);
   

















 










// function merge<T, U>(obj1:T, obj2:any) {
//     return Object.assign({},obj1, obj2);
//   }
  
// // let result = merge({name:'kaywan'}, {age:30}) as{name:string, age:number}
// let result = merge({name:'kaywan'}, [1,2]) ;

// console.log(result.name);
// console.log(result.age);









// function sumArray(arr: any[]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
  
//   const result = sumArray([1, 2, 3]);
//   console.log(result); // خروجی: 6
  
//   const result2 = sumArray(['1', '2', '3']);
//   console.log(result2); // خروجی: "0123"
  





// function sumArray(arr: number[]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     console.log(sum);
    
//     return arr;
//   }
  
  
//   const result = sumArray([1, 2, 3]);
//   console.log(result); // خروجی: 6
//   console.log(result.length); // خروجی: 6
  
//   const result2 = sumArray(['1', '2', '3']); // خطای کامپایل!
//   console.log(result2);
  






//   function sumArray<T extends>(arr: T[]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return arr;
//   }
  
//   const result = sumArray([1, 2, 3]);
//   console.log(result); // خروجی: 6
  
//   const result2 = sumArray(['1', '2', '3']); // خطای کامپایل!
//   console.log(result2);
  







// class Data<T extends number | string>{
//   items:T[]=[]

//   addItem(item:T) {
//        this.items.push(item)
//   }

//   removeItem(item:T){
//     this.items=this.items.filter(i=>i!=item)

//   }

//   getData (){
//     return this.items
//   }
// }

// let data = new Data<boolean>()
// data.addItem('k')
// data.addItem('a')
// console.log(data.getData());












// let Data1 = [1,2,3,4]
// Data1.push(10)


// let Data2:Readonly<number[]> = [5, 6, 6, 7, 8]
// Data2.push(10)






// ******************************* video 26 to 29  ***************************

// function Template(tag:string, cls:string){
//     console.log('factory Template');
    
//     return function(ctr: any){
//         console.log('decorator Template');
//     }
    
// }


// function Log(){
//     console.log('factory Log');
//      return function(ctr: any){
//         console.log('decorator Log');
//      }
     
//  }


// @Template('<p>test decorator</p>','parent')
// @Log()
// class Person{

//     constructor(public name:string, public age:number){}


//     getPerson(){

//         return `my name is  ${this.name} ${this.age} years old.`
//     }
// }









// function DecPro(message:string){
//     console.log(message);
    
//     return function(target:any, value:string){
//          console.log('target = ',target);
//          console.log('value = ',value);  
//     }
// }

// function Dec(message:string){
//     console.log(message);
//     return function(target:any, value:string, descriptor:PropertyDescriptor){
//          console.log('target1 = ',target);
//          console.log('value2 = ',value);  
//          console.log('descriptor = ',descriptor);  
//     }
// }

// function Log(target:any, value:string, position:number){
//          console.log('target = ',target);
//          console.log('value = ',value);  
//          console.log('position = ',position);  
// }

// class Person{

//     // @DecPro('test')
//     name:string='kaywan'

//     constructor(@Log public age:number){}

//     // @Dec('test')
//     get getAge(){
//         return this.age
//     }

//     @Dec('test')
//     getPerson(@Log message:string){

//         return `${message}  ${this.name} ${this.age} years old.`
//     }
// }


let x=10
console.log(x);
