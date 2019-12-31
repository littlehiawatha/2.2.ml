const name = 'Matt';
// console.log(name);

const button = document.getElementById('awesome-button')
// console.log(button)

const listItems = document.getElementsByTagName('li')
// console.log(listItems)

const paragraph = document.querySelector('.awesome-paragraph')
// console.log(paragraph.innerText)

paragraph.innerText = 'I am an awesome p tag';
// console.log(paragraph.innerText)

const allParagraphs = document.querySelectorAll('.awesome-paragraph')
// console.log(allParagraphs[0].innerHTML)

const unorderedList = document.getElementById('awesome-list')
// console.log(unorderedList.innerHTML)

const header = document.querySelector('header')
// console.log(header)

header.classList.add('dark-theme')
// console.log(header.className)

header.classList.remove('dark-theme')
// console.log(header.className)

header.classList.toggle('dark-theme')
// console.log(header.className)

const body = document.querySelector('body');
// body.style = 'background-color: red; color: blue';

const input = document.getElementById('awesome-input');
// console.log(input)
// console.log(input.value)

function greeting(){
    console.log(`Hello, ${input.value}`)
}

// function inputTracker(){
//     console.log(input.value)
// }

let inputValue = ''

input.addEventListener('keypress', function(event){
    inputValue = event.target.value
    console.log(inputValue)
})

// function childClick(event){
//     event.stopPropagation()
//     console.log('Child button clicked')
// }

document.getElementById('child').addEventListener('click', function(event){
    event.stopPropagation()
    console.log('Child button clicked')
})

function parentClick(){
    console.log('Parent div clicked')
}

document.getElementById('form-btn').addEventListener('click', function(event){
    event.preventDefault()
    console.log('stopped form submission')
})

const newButton = document.createElement('button')
newButton.innerText = 'New Button';
newButton.setAttribute('id', 'new-button');
console.log(newButton.getAttribute('id'))

document.getElementById('parent').appendChild(newButton);

listItems[2].remove()

console.log(header.parentNode)