const textArea = document.getElementById('text-area')

textArea.addEventListener('input', () => {
    if (textArea.innerHTML.trim() === '<br>') textArea.innerHTML = ''
})
