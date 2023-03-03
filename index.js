const slides = document.querySelectorAll('.slide')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const slidesCount = document.querySelector('.main-slide').querySelectorAll('div').length
let activeSlideIndex = 0

sidebar.style.top = ` -${(slidesCount - 5) * 100}vh `

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

const changeSlide = (direction) => {
    console.log(activeSlideIndex);
    if (direction === 'up') {
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }

    }else if (direction === 'down') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    }else {
        console.log('wrong direction');
    }
    const height = container.clientHeight
    document.querySelector('.main-slide').style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`
}
document.querySelector('.up-button').addEventListener('click', ()=>{
    changeSlide('up')
})
document.querySelector('.down-button').addEventListener('click', ()=>{
    changeSlide('down')
})
document.addEventListener('keydown', (event)=>{
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    }
    if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})