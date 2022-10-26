const headings = document.querySelectorAll('h2')

function toggleContent(e) {
    const paragraph = e.target.nextElementSibling
    paragraph.classList.toggle('non-display')
    let sign = e.target.childNodes[1]
    if (sign.innerText === '+') sign.innerText = '-'
    else sign.innerText = '+'
}

headings.forEach(heading => {
    heading.addEventListener('click', toggleContent)
})

console.log(headings)