const slides = document.querySelectorAll('.slide')


document.querySelector('.button').onclick = () => {
    document.querySelector('#block2').scrollIntoView({
        block:'nearest',
        behavior:'smooth'
    })
}
slides.forEach((slide) => {
    slide.addEventListener('click', ()=>{
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
        slide.classList.add('active')

    })
})

