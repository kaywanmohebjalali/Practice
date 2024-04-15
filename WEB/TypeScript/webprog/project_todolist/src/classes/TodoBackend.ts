import {TodoInterface} from '../interfaces/TodoInterface'
import {TodoFrontend} from './TodoFrontend'
// get list in localStorage
let listTodo:TodoInterface[]=[];
let todoLocal = JSON.parse(localStorage.getItem('todo') as string)
listTodo = todoLocal ||[]

// class TodoBackend for work with localStorage
class TodoBackend implements TodoInterface{
    id: number;
    title: string;
    status:boolean;

    constructor(todo:TodoInterface){
        this.id = todo.id;
        this.title=todo.title;
        this.status=todo.status
    }

    addItem(todo:TodoInterface){
          listTodo.push(todo)
          localStorage.setItem('todo',JSON.stringify(listTodo))  
         console.log('dddd');
         
        
        }


    static deleteItem(id:number){
       let new_listTodo = listTodo.filter((obj)=>obj.id!=id)
       listTodo=new_listTodo
       listTodo.length===0?localStorage.removeItem('todo') :localStorage.setItem('todo',JSON.stringify(listTodo))
       new TodoFrontend(listTodo)

       
 

    }


   static changeStatus(e:Event){
        let element = e.target as HTMLInputElement
        let parentElement = (element.parentNode?.parentNode) as HTMLElement
        let id= parentElement.dataset.id!
           let new_listTodo = listTodo.map((obj)=>obj.id==(+id)?{...obj,status:!obj.status}:obj) as TodoInterface[]
           localStorage.setItem('todo',JSON.stringify(new_listTodo))
           listTodo=new_listTodo
        
    }
       
}




export {TodoBackend, listTodo}

