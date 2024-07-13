let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

daynight.addEventListener('click', ()=>{
    banner.classList.toggle("night"); //adding a newclass 'night' to banner cls, toggle does a thing once, and next time it undoes, or does smtg else
})

let typingeffect = new Typed("#text",{
    strings: ["Picky", "Rip digger", "Evolving The Core"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});