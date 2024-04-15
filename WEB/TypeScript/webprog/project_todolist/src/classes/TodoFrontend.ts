
import {TodoInterface} from '../interfaces/TodoInterface'
import {TodoBackend, listTodo} from './TodoBackend';
const tableElement =document.querySelector('#todo-list')!;
import Swal from 'sweetalert2';

// class TodoFrontend for work with ui
class TodoFrontend{

    constructor(private list:TodoInterface[]){
         tableElement.innerHTML=''
         let text = ''
         this.list.forEach((obj:any)=>{
    
    text+= `
         <tr data-id=${obj.id}>
            <th scope="row">${obj.id}</th>
            <td>${obj.title} </td>
            <td><input ${obj.status?'checked':''} type="checkbox" class="form-check-input"></td>
            <td>
               <button class="btn btn-sm btn-outline-danger" onclick="deleteTodo(${obj.id},event)">delete</button>
            </td>
         </tr>
        `
    })

    tableElement.insertAdjacentHTML("beforeend",text)

    }


    static addItem(obj:TodoInterface){
        let text = ''
        text+= `
         <tr data-id=${obj.id}>
            <th scope="row">${obj.id}</th>
            <td>${obj.title} </td>
            <td><input ${obj.status?'checked':''} type="checkbox" class="form-check-input"></td>
            <td>
               <button class="btn btn-sm btn-outline-danger" onclick="deleteTodo(${obj.id},event)">delete</button>
            </td>
         </tr>
        `
        tableElement.insertAdjacentHTML("beforeend",text)
        
        console.log('kkk');
        

        Swal.fire({
         position: 'top',
         icon: 'success',
         title: 'todo delete',
         showConfirmButton: false,
         timerProgressBar:true,
         timer: 1500,
         toast:true
       })
     
     
      }



    static deleteItem(e:Event){
      let element = e.target as HTMLElement
      let parent = element.parentElement?.parentElement;
      parent?.remove()

      Swal.fire({
         position: 'top',
         icon: 'error',
         title: 'todo delete',
         showConfirmButton: false,
         timerProgressBar:true,
         timer: 1500,
         toast:true
       })

    }



}

(window as any).deleteTodo =  (id:number,e:Event) =>{
    TodoBackend.deleteItem(id)
    TodoFrontend.deleteItem(e)
    }


listTodo.length &&  new TodoFrontend(listTodo) 




export {TodoFrontend}