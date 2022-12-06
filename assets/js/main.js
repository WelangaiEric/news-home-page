const toggleBtn = document.querySelector('.toggleBtn');
const offCanvas = document.querySelector('.navbar-links')
// const Hero = document.querySelector('.hero')
const observer =new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')

        }
    });
});

toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded');
    if (isOpen==='false'){
        toggleBtn.setAttribute('aria-expanded','true');
    }
    else{
        toggleBtn.setAttribute('aria-expanded','false');

    }
    const expand = offCanvas.getAttribute('aria-expanded');

    if (expand==='false'){
        offCanvas.setAttribute('aria-expanded','true');
    }
    else{
        offCanvas.setAttribute('aria-expanded','false');

    }
    
    // document.body.style.background = ;
    Hero.classList.add('show')

});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))

