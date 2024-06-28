let menuIcon = document.querySelector('#mii1');
let navbar = document.querySelector('.nii1');

let section = document.querySelectorAll('section1');
let navLinks = document.querySelectorAll('header nav ul li ');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id1');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active1');
                document.querySelector('header nav ul li [href*='+ id + ' ]').classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxx');
    navbar.classList.toggle('active1')
}