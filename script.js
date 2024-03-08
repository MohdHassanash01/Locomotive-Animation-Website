let footer = document.querySelector("#footer h2")

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



footer.addEventListener("click",function(){
scroll.scrollTo(0)
})


let nav2h3 = document.querySelectorAll(".nav2 h3")
let logo = document.querySelector(".logo")
let nav2 = document.querySelector("#nav .nav2")
let cross = document.querySelector("#nav .cross")
let plus = document.querySelector("#nav .plus")


nav2h3.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.style.textDecoration = 'underline';
        val.style.cursor = 'pointer';
    })
    
    val.addEventListener("mouseleave",function(){
        val.style.textDecoration = 'none';
        val.style.cursor = 'none';
    })
})


logo.addEventListener("mouseenter",function(){
    logo.style.textDecoration = 'underline';
    logo.style.cursor = 'pointer';
})

logo.addEventListener("mouseleave",function(){
    logo.style.textDecoration = 'none';
    logo.style.cursor = 'none';
})


cross.addEventListener("click",function(){
   nav2.style.display = 'none'
   plus.style.display = 'block'
})

plus.addEventListener("click",function(){
    
    nav2.style.display = 'block'
    nav2.style.display = 'flex'
    nav2.style.alignItems = 'center'
    nav2.style.gap = '50px'
    plus.style.display = 'none'
})



function loading(){
    
let tl = gsap.timeline()

tl.to("#yellow1",{
    top:'-100%',
    delay:0.5,
    duration:0.7,
    ease:"expo.out"
})

tl.from("#yellow2",{
    top:'100%',
    delay:0.4,
    duration:0.5,
    ease:"expo.out"
},"anim")


tl.to("#loader h1",{
    
    delay:0.2,
    duration:0.5,
    color:"black",
    
},"anim")


tl.to("#loader",{
   opacity:0,
})

tl.to("#loader",{
    display:'none',
 })

}
loading()

let elems = document.querySelectorAll(".elem")
let page2 = document.querySelector(".page2")

elems.forEach(function(ele){

    ele.addEventListener("mouseenter",function(){
     let bgimage =   ele.getAttribute("data-img") 
page2.style.backgroundImage = `url(${bgimage})`

    })

    
    ele.addEventListener("mouseleave",function(){
        let bgimage =   ele.getAttribute("data-img") 
   page2.style.backgroundImage = 'none'
   
       })
})