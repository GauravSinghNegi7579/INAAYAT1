
var tl = gsap.timeline()

tl.from("nav img,#navpart2 h2",{
    y:-100,
    Delay:1.5,
    duration:2,
    opacity:1.5,
    stagger:.2
})
tl.from("#left1",{
    // Delay:1.6,
    duration:1.5,
    x:-100,
    opacity:0,

})
gsap.from("#mimg",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:.3,
    rotate:360,
   
    scrollTrigger:{
        trigger:"#page .box",
        scroller:"body",
        scrab:3, 
        // repeat:-1,
    }
})
gsap.from("#timg1,#timg2,timg3,#content3",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:.3,
    
   
    scrollTrigger:{
        trigger:"#page .box",
        scroller:"body",
        scrab:3, 
        // markers:true,
        // start: "top 10%",
    }
})
