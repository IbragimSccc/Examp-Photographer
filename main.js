const pics = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1675875053102-bc894884c564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
]


const imgBlock = document.querySelector('section div.img-block')

pics.forEach(src => {
    const img = document.createElement('img')
    img.src = src

    const div = document.createElement('div')
    div.className = 'images'
    div.append(img)


    div.addEventListener('click', function () {
        const modal = document.querySelector('.modal')
        const modalImg = document.querySelector('.modal-content')
        const overlay = document.querySelector('.overlay')
        modal.style.display = 'block'
        modal.style.opacity = 1
        modal.style.zIndex = 100
        overlay.style.opacity = 1
        overlay.style.zIndex = 100
        modalImg.src = this.querySelector('img').src
    })

    imgBlock.append(div)
})


// Обработчик событий на закрытие модального окна
document.querySelector('.close').addEventListener('click', function () {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    modal.style.display = 'none'
    modal.style.opacity = 0
    modal.style.zIndex = -100
    overlay.style.opacity = 0
    overlay.style.zIndex = -100
})


// Закрытие модального окна при клике вне картинки
document.querySelector('.overlay').addEventListener('click', function () {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    modal.style.display = 'none'
    modal.style.opacity = 0
    modal.style.zIndex = -100
    overlay.style.opacity = 0
    overlay.style.zIndex = -100
})




///Модальное окно Contact me
const contact = document.querySelector('.btn-contact')


contact.addEventListener('click', function () {
    const modalContact = document.querySelector('.modal-contact')
    const modalContent = document.querySelector('.contact-content')
    const overlay = document.querySelector('.overlay')
    modalContact.style.display = 'block'
    modalContact.style.opacity = 1
    modalContact.style.zIndex = 100
    overlay.style.opacity = 1
    overlay.style.zIndex = 100
    modalContent = this.querySelector('div')
})

// Обработчик событий на закрытие модального окна
document.querySelector('.close-contact').addEventListener('click', function () {
    const modalContact = document.querySelector('.modal-contact')
    const overlay = document.querySelector('.overlay')
    modalContact.style.display = 'none'
    modalContact.style.opacity = 0
    modalContact.style.zIndex = -100
    overlay.style.opacity = 0
    overlay.style.zIndex = -100
})

// Закрытие модального окна при клике вне картинки
document.querySelector('.overlay').addEventListener('click', function () {
    const modalContact = document.querySelector('.modal-contact')
    const overlay = document.querySelector('.overlay')
    modalContact.style.display = 'none'
    modalContact.style.opacity = 0
    modalContact.style.zIndex = -100
    overlay.style.opacity = 0
    overlay.style.zIndex = -100
})













/////// Отправка данных
const userInfo = {}

const sendMessage = document.querySelector('.send').addEventListener('click', function () {
    const infoName = document.getElementById('name').value;
    const infoEmail = document.getElementById('email').value;
    const infoText = document.getElementById('text').value;

    userInfo.name = infoName;
    userInfo.email = infoEmail;
    userInfo.message = infoText;


    console.log(userInfo)


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
})












////Кнопка
const hoverBtn = document.querySelectorAll('.btn-contact')

for (let i = 0; i < hoverBtn.length; i++) {
    hoverBtn[i].addEventListener('mouseover', () => {
        hoverBtn[i].style.backgroundColor = '#19849B'
        hoverBtn[i].style.border = 'none'
        hoverBtn[i].style.cursor = 'pointer'
    })

    hoverBtn[i].addEventListener('mouseout', () => {
        hoverBtn[i].style.backgroundColor = ''
        hoverBtn[i].style.border = ''
        hoverBtn[i].style.cursor = 'pointer'
    })
}