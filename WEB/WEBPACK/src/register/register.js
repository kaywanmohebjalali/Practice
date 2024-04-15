import * as bootstrap from 'bootstrap'
bootstrap
import "./register.scss";





let btn = document.querySelector('button')
btn.addEventListener('click',()=>{

    import ('../components/header/Header.js').then(module=>{
        console.log('m = ',module)

    })

  


   



})