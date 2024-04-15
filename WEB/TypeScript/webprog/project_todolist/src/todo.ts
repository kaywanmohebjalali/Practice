import { TodoInterface } from './interfaces/TodoInterface'
import { TodoFrontend } from './classes/TodoFrontend'
import { TodoBackend,listTodo } from './classes/TodoBackend'




const $ =document;
const formElement =$.querySelector('#todo-form') as HTMLFormElement;
const inputElement =$.querySelector('#title') as HTMLInputElement;
const errorElement =$.querySelector('#title-error') as HTMLParagraphElement;
const tableElement =$.querySelector('#todo-list')!;



formElement.addEventListener('submit',(e:Event)=>{
   e.preventDefault()
   if(!inputElement.value.trim()){
    errorElement.className='form-text text-danger'
   }
   else{
      
    let newId =listTodo.length && (listTodo[listTodo.length-1])['id']+1 || 1;
    const todo:TodoInterface={
          id:newId,
          title:inputElement.value.trim(),
          status:false
    }

    let backendTodo = new TodoBackend(todo)
    backendTodo.addItem(todo)
    TodoFrontend.addItem(todo)

   }
   
   inputElement.value='';
})


inputElement.addEventListener('keyup',(e:Event)=>{
    let input = e.target as HTMLInputElement
    input.value.trim() && (errorElement.className='form-text text-danger opacity-0')
    
})




tableElement.addEventListener('change',TodoBackend.changeStatus)



















