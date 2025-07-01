let nav = document.querySelector(".first-side-links");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let fisrtNav = document.querySelectorAll(".nav-links a");
ActiveLink(fisrtNav);
let secondNav = document.querySelectorAll(".filter button");
ActiveLink(fisrtNav);
let ScrollActive = document.querySelectorAll(".scroll a");
ActiveLink(fisrtNav);
function ActiveLink(val){
    val.forEach((element) => {
        element.addEventListener("click",(e)=>{
            val.forEach(e=>e.classList.remove("active"));
            e.target.classList.add("active");
        })
    });
}
menu.addEventListener("click",()=>{
    nav.style.right = "0";
})
close.addEventListener("click",()=>{
        nav.style.right = "-100%";
})