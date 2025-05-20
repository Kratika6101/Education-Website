/*CHANGE NAVBAR STYLES ON SCROLL*/

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
    /*classlist is a method to add,remove or check class of a div or nav*/
    /*toggle method removes a class from nav element on scroll*/
})


// show/hide faq answer //

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {  /*faqs is array andfaq is element*/
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
    })

    //change icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-plus'){
        icon.className = "uil uil-minus";
    }else{
        icon.className = "uil uil-plus";
    
    }
})

// SHOW/HIDE NAV MENU 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// CLOSE NAV MENU 

const closeNav = () =>{
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);/*closenav is function*/
