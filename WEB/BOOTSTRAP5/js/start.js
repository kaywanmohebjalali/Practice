
// var myCollapsible = document.getElementById('myCollapsible')
// myCollapsible.addEventListener('hidden.bs.collapse', function () {
//   // do something...
// })








// let btn =document.querySelector('#liveToastBtn')

// btn.addEventListener('click',() =>{

//   let toastElList = [].slice.call(document.querySelectorAll('.toast'))
//   let toastList = toastElList.map(function (toastEl) {
//     return new bootstrap.Toast(toastEl, {
//       animation:true,
//       autohide:true,
//       delay:1000
//     })
//   })
  
//   toastList.forEach(element => element.show());

  
// })






let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




