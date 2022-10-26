// DOM as the OOP representation of any document

console.log(window.document)

// MANIPULACIÓN DEL DOM

// ONLOAD METHOD

// onload = () => console.log('ESTOY LISTO')

// WHY Nodes ???? paragraph --> new id

// console.log(typeof document.getElementById('paragraph'))

// DOM methods --> id, query...
const paragraphs = document.querySelectorAll('p')
const paragraph = document.querySelector('p')
// console.log(paragraphs)
// paragraphs.forEach(paragraph => paragraph.style.color = 'red')

// NODE TRAVERSING --> element.parentElement, element.nextSibling, element.childNodes

// DOM NODE properties and methods: createElement, createTextNode,
// setAttribute, appendChildm, removeAttribute, remove...

// const heading = document.createElement("p");
// const headingText = document.createTextNode("Dios no me creó");
// heading.appendChild(headingText);
// document.body.appendChild(heading);

// setTimeout(() => {
//     heading.setAttribute('class', 'red-ugly-text')
//     // heading.removeAttribute('class', 'red-ugly-text')
// }, 2000)

// setTimeout(() => {
//     heading.remove()
// }, 3000)

// EVENT LISTENERS --> ADD EVENT LISTENER..., CLICK, DBLCLICK, COPY, KEYDOWN

// const rageButton = document.querySelector('.uwu-button')
// console.log(rageButton)

// rageButton.addEventListener('click', () => console.log('DÓM NOOOOOOOOOOOOOOOOOOO'))

// document.addEventListener('keydown', ({ code }) => {
//     // console.log(code)
//     if (code === 'ArrowLeft') {
//         console.log('ME MUEVO HACIA LA IZQ')
//     }
//     if (code === 'ArrowRight') {
//         console.log('ME MUEVO HACIA LA DCHA')
//     }
//     if (code === 'ArrowDown') {
//         console.log('ME MUEVO HACIA ABAJO')
//     }
//     if (code === 'Space') {
//         console.log('ME MUEVO HACIA ARRIBA')
//     }
// })

// document.addEventListener('keyup', ({ code }) => {
//     if (code === 'ArrowLeft') {
//         console.log('DEJA DE MOVERTE A LA IZQ')
//     }
//     if (code === 'ArrowRight') {
//         console.log('DEJA DE MOVERTE A LA DCHA')
//     }
//     if (code === 'ArrowDown') {
//         console.log('DEJA DE MOVERTE HACIA ABAJO')
//     }
//     if (code === 'Space') {
//         console.log('DEJA DE MOVERTE HACIA ARRIBA')
//     }
// })

// const heading = document.createElement("p");
// const headingText = document.createTextNode("Dios no me creó");
// heading.appendChild(headingText);
// document.body.appendChild(heading);

// const input = document.querySelector('#text-input')

// input.addEventListener('change', (e) => {
//     const newSpan = document.createElement('span')
//     const message = document.createTextNode(e.target.value)
//     newSpan.appendChild(message)
//     document.body.appendChild(newSpan)
//     input.value = ""
// })

paragraph.addEventListener('copy', (e) => {
    const selection = document.getSelection();
    e.clipboardData.setData('text/plain', selection.toString().toLowerCase().split("").reverse().join(""));
    e.preventDefault();
})