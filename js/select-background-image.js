const background__image = document.getElementById('background__image')
const select_background_image = document.getElementById('select-background-image')

const select_background_image_inputs = select_background_image.querySelectorAll('.select-background-image__radio')

// check if key already exists
if (localStorage.getItem('background-image-id') === null) localStorage.setItem('background-image-id', 0)

// set default image
background__image.src = `./images/background/${localStorage.getItem('background-image-id')}.png`

// loop over each input
select_background_image_inputs.forEach(input => {
    
    // set default checked
    if (input.dataset.id === localStorage.getItem('background-image-id')) {
        input.setAttribute('checked', '')
    }
    input.addEventListener('click', event => {

        background__image.classList.add('background__image--blend')
        background__image.addEventListener('transitionend', () => {
            background__image.src = `./images/background/${event.target.dataset.id}.png`
            background__image.classList.remove('background__image--blend')
        })

        localStorage.setItem('background-image-id', event.target.dataset.id)
    })
})
