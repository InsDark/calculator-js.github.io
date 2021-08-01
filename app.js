let result = document.querySelector('.result')
result.style.display = 'none'
let message = document.querySelector('.message')
let equals = document.querySelector('.equal')
let clear = document.querySelector('.clear')
let values = document.querySelectorAll('.btn')

let deleter = document.querySelector('.deleter')

values.forEach(item => {
    item.addEventListener('click', () => {
        message.style.display = 'none';
        result.style.display = 'block';
        result.textContent += item.textContent
    })
})

equals.addEventListener('click', () =>{
    result.textContent = eval(result.textContent)
})

clear.addEventListener('click', () =>{
    result.textContent = ''
    aMessage()
})

deleter.addEventListener('click', () =>{
        let content = result.textContent
        result.textContent = ''
        let arrayContent = content.split('')
        arrayContent.pop()
        arrayContent.forEach(item => {
            result.textContent += item
        })   
        aMessage()
})

const aMessage = () => {
    if(result.textContent === '') {
        result.style.display = 'none'
        message.style.display ='block'
    }
}
