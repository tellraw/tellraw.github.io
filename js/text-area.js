const textArea = document.getElementById('text-area')

textArea.addEventListener('input', () => {
    if (textArea.innerText === '\n') textArea.innerHTML = ''
})
