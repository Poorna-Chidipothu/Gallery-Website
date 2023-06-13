const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signUpBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signUpBtn.addEventListener("click",() => {
    formContainer.classList.add("active");
})

loginBtn.addEventListener("click",() => {
    formContainer.classList.remove("active");
})

pwShowHide.forEach((icon) => {
    icon.addEventListener("click",() =>{
        let getpwInput = icon.parentElement.querySelector("input");
        if(getpwInput.type === "password"){
            getpwInput.type = "text";
            icon.classList.replace("uil-eye-slash","uil-eye");
        }
        else{
            getpwInput.type = "password";
            icon.classList.replace("uil-eye","uil-eye-slash");
        }
    });
    
});



const allImages = document.querySelectorAll(".images .img");
const LightBox = document.querySelector(".lightbox");
const CloseBtn = LightBox.querySelector(".close");
const DownloadBtn = LightBox.querySelector(".download");
const scrollUpBtn = document.getElementById("scroll-up");

allImages.forEach(img=> {
    img.addEventListener("click",() => {
        showLightBox(img.querySelector("img").src);
        downloadimg(img.querySelector("img").src);
    });

});
const downloadimg = (img) =>{
    LightBox.querySelector("a").href=img;
    console.log(img)
}
const showLightBox = (img) =>{
    LightBox.querySelector("img").src=img;
    LightBox.classList.add("show");
    document.body.style.overflow = "hidden";

}

CloseBtn.addEventListener("click",() => {
    LightBox.classList.remove("show");
    document.body.style.overflow = "auto";
})

const ScrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >=350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

window.addEventListener('scroll',ScrollUp);

const returnHome = () =>{
    document.querySelector("scrollup").href = '#Home';
}
scrollUpBtn.addEventListener("click",returnHome);

