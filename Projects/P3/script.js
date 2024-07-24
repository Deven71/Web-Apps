var cur = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
cur.style.left = dets.x+"px"
cur.style.top = dets.y+"px"
})
var curblur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
curblur.style.left = dets.x - 125 + "px"
curblur.style.top = dets.y - 125 + "px"
})
gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})
gsap.to(".content",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:2,
    }
})