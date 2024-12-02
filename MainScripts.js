// Scroll to section assigned by the target name in the href
document.querySelector('nav').addEventListener('click',function(event) {
    if(event.target.tagName === 'A') {
        let targetSection = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'

        });
        event.preventDefault();
    }
})
