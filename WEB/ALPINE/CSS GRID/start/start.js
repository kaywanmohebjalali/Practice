let $ = document
let rangeElement = $.querySelector('input')

function changeMethod() {
    console.log('change')
}
function inputMethod() {
    console.log('input')
}
rangeElement.addEventListener('change',changeMethod)
rangeElement.addEventListener('input',inputMethod)