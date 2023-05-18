const image = document.querySelectorAll('div')
const image1 = document.querySelector('.image-img1')

const eliminarClase = () => {
    image.forEach(el => {
        el.classList.remove('active')
    })
}

document.addEventListener('click', e => {
    if(e.target.matches('.image-img1')){
        eliminarClase()
        document.querySelector('.image1').classList.toggle('active')
    } else if(e.target.matches('.image-img2')){
        eliminarClase()
        document.querySelector('.image2').classList.toggle('active')
    } else if(e.target.matches('.image-img3')){
        eliminarClase()
        document.querySelector('.image3').classList.toggle('active')
    } else if(e.target.matches('.image-img4')){
        eliminarClase()
        document.querySelector('.image4').classList.toggle('active')
    }
})

