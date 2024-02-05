let navbar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".icon .bars i");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-window-close");
    menuIcon.classList.toggle("active");

    navbar.classList.toggle("active")
})



let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".header .navbar a");
// console.log(navlinks)



window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`.header .navbar a[href*=` + id + `]`).classList.add("active")
            })
        } else if (top >= 200) {
            document.querySelector(".footer-iconTop a").classList.add("active");
        } else if (top <= 200 && offset === offset) {
            document.querySelector(".footer-iconTop a").classList.remove("active");
        }
    })
    // end of scrool active link

    // sticky navbar 

    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100)

}


// Our Services
const services = [
    {
        icon: "fa-code",
        skill: "web designer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime beatae possimus consequatur quas est accusantium eveniet quisquam similique reprehenderit voluptatem architecto, vel nobis quo officia quod id, et facilis.",

    }
];

const LightBox = document.querySelector(".lightbox-1")
const LightBoxCloseBNT = document.querySelector(".lightbox-1 > .wrapper > button > i");
const LightBoxAddBNT = document.querySelector(".AddLightBox");
LightBoxCloseBNT.addEventListener("click", () => {
    LightBox.classList.remove("active")
})
LightBoxAddBNT.addEventListener("click", () => {
    LightBox.classList.add("active");
})
// end of Our Services