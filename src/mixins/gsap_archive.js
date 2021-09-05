
// scrub seems to break an array instance
// two utils.toArray instances seem to not work

// gsap.utils.toArray('.up').forEach(up => {
        //     ScrollTrigger.create({
        //         trigger: up,
        //         stagger: 1,
        //         duration: 2,
        //         ease: 'expo',
        //         toggleClass: 'fade-up'
        //         });
        //     });

        // gsap.fromTo(".up", {
        // opacity: 0,
        // y: 100,
        // }, {
        // duration: 1, 
        // opacity: 1,
        // y: 0,
        // ease: "expo",
        // stagger: 0.5,
        // scrollTrigger: {
        //     trigger: ".up",
        //     toggleActions: "restart pause reverse pause"
        // },
        // });

        // const fadeUp = document.querySelectorAll('.up');
        // fadeUp.forEach((fade) => {
        // gsap.to(fade, {
        //     autoAlpha: 1,
        //     scrollTrigger: {
        //     trigger: fade,
        //     start: 'top bottom-=100',
        //     toggleActions: 'play none none reverse',
        //     }
        // });
        // });

        // gsap.to(".yoyo p", {
        // scrollTrigger: ".yoyo", 
        // scale: 2, 
        // repeat: -1, 
        // yoyo: true, 
        // ease: "power2"
        // });


        // gsap.utils.toArray('.up').forEach(up => {
        //     ScrollTrigger.create({
        //         trigger: up,
        //         stagger: 1,
        //         duration: 2,
        //         ease: 'expo',
        //         toggleClass: 'fade-up'
        //         });
        //     });
    
        // gsap.utils.toArray('.fade').forEach(fade => {
        //     ScrollTrigger.create({
        //         trigger: fade,
        //         stagger: 2,
        //         duration: 2,
        //         ease: 'expo',
        //         toggleClass: 'fade-in'
        //         });
        //     });



// toggle an active class
// active() {
//   gsap.utils.toArray('img').forEach(step => {
//     ScrollTrigger.create({
//         trigger: step,
//         scrub: true,
//         toggleClass: 'text-focus-in'
//     });
//   });
// },

// banner timeline animation
// banner() {
//   const tl = gsap.timeline({ defaults: {duration: 0.5, ease: "back"} } );
//   tl.from(".site-title", {rotation: -270, opacity: 0}) //child tweens will inherit the duration and from the parent timeline!
//     .from(".site-subtitle", {scale: 0, opacity: 0})
//     .from(".btn", {x: -180, opacity: 0})
//     .from(".bg-sand", {opacity: 0})
//     .from("img", {opacity: 0});
// },

// bgLight() {
//     gsap.to('.light', {
//       scrollTrigger: {
//         trigger: ".light",
//         toggleActions: "restart pause reverse pause"
//       }, 
//       duration: 1, 
//       backgroundColor: "#f8f9fa", 
//       ease: "none"
//     });
//   },
//   bgLinen() {
//     gsap.to(".linen", {
//       scrollTrigger: {
//         trigger: ".linen",
//         toggleActions: "restart pause reverse pause"
//       }, 
//       duration: 1, 
//       backgroundColor: "#E9E9E9", 
//       ease: "none"
//     });
//   },

let phrases = ["Happy", "New Year", "to all", "who believe", "in", "new", "years", "😍"]
let demo = document.querySelector(".demo")
let animation = gsap.timeline({repeat:5, repeatDelay:0.6})

function createLayers(){
  phrases.forEach(value => {
    let layer = document.createElement("div")
    layer.innerHTML = value
    demo.appendChild(layer)
  })
}

function animateText() {
  let layers = document.querySelectorAll(".demo div")
  layers.forEach(function(element, index){
    animation.fromTo(element, {opacity:0, scale:0}, {scale:1, opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:0.3})
  })
  gsap.set(".demo", {visibility:"visible"}) 
}

createLayers()
animateText()