document.querySelector('.button').onclick = () => {
    document.querySelector('#block2').scrollIntoView({
        block:'nearest',
        behavior:'smooth'
    })
}