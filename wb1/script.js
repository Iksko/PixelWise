/*HAMMENU*/
const hamburger = document.getElementById("ham")
const navbar = document.getElementById("mobile-navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active")
    navbar.classList.toggle("is-active")

    window.addEventListener("scroll", () => {
      if(window.pageYOffset>1){
        navbar.classList.remove("is-active")
        hamburger.classList.remove("is-active")
      }
    })
})

document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("is-active")
    navbar.classList.remove("is-active")
}))

/*NAV-SCROLL*/
const about = document.querySelector("a[href='#about']")
about.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(about.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const mobileabout = document.querySelector("a[href='.about']")
mobileabout.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(mobileabout.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const services = document.querySelector("a[href='#services']")
services.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(services.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const mobileServices = document.querySelector("a[href='.services']")
mobileServices.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(mobileServices.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const gallery = document.querySelector("a[href='#gallery']")
gallery.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(gallery.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const mobileGallery = document.querySelector("a[href='.gallery']")
mobileGallery.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(mobileGallery.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});
const contact = document.querySelector("a[href='#contact']")
contact.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(contact.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

const mobileContact = document.querySelector("a[href='.contact']")
mobileContact.addEventListener("click", (event) => {
  event.preventDefault()
  const target = document.querySelector(mobileContact.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
});

/*BACK-TO-TOP-ICON*/
const iconActive = document.getElementById("icon")
const header = document.getElementById("header")
const mobileNav = document.getElementById("mobile-navbar")

window.addEventListener("scroll", () => {
  if(window.pageYOffset>100){
    icon.classList.add("is-active")
  }
  if(window.pageYOffset>1){
    header.classList.add("is-active")
    mobileNav.classList.add("scroll")
  }
  else{
    icon.classList.remove("is-active")
    header.classList.remove("is-active")
    mobileNav.classList.remove("scroll")
  }
})
const iconScroll = document.getElementById("icon")
iconScroll.addEventListener("click", (event) => {
  event.preventDefault();
  const target = document.querySelector(iconScroll.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth" });
});
/*SHOW-MORE*/

const showMoreBtn = document.getElementById("show-more-btn")
const showMore = document.querySelector(".show-more")

showMoreBtn.addEventListener("click", () => {

  showMore.classList.toggle("is-active")
  showMoreBtn.classList.toggle("is-active")
})

/*ABOUT ANIMATION*/
const aboutAni = document.getElementById("text")
const servicesAni = document.getElementById("services")
const contactAni = document.getElementById("contact")
const footerAni = document.querySelector("footer")

window.addEventListener("scroll", () => {
  /*ABOUT ANIMATION*/
  if(window.pageYOffset>2){
    aboutAni.classList.add("is-active")
  }
  /*SERVICES ANIMATION*/
  if(window.pageYOffset>1000){
    servicesAni.classList.add("is-active")
  }
  /*CONTACT ANIMATION*/
  if(window.pageYOffset>3100){
    contactAni.classList.add("is-active")
  }
  if(window.pageYOffset>3600){
    footerAni.classList.add("is-active")
  }
})





