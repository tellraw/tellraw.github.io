const textArea = document.getElementById('text-area')

// clear empty
textArea.addEventListener('input', () => {
    if (textArea.innerText === '\n') textArea.innerHTML = ''
})

