/*CHANGE NAVBAR STYLES ON SCROLL*/

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
    /*classlist is a method to add,remove or check class of a div or nav*/
    /*toggle method removes a class from nav element on scroll*/
})
