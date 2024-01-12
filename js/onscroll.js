window.onscroll = function(){
    var elemento = document.getElementById('arrow')
    var nav = document.getElementById('nav')

    if(window.pageYOffset > 300)
    {
        elemento.classList.add('visible')
        nav.classList.add('nav__shadow')
    } else {
        elemento.classList.remove('visible')
        nav.classList.remove('nav__shadow')
    }
}
