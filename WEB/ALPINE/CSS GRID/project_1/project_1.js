

let $ = document
let hIcon = $.querySelectorAll('.box-center h5')
let div=''
hIcon.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
        div =event.target.parentElement
        div.style.color=div.dataset.color 
    })
    item.addEventListener('mouseleave', function (event) {
        div.style.color='#000' 
    })
})