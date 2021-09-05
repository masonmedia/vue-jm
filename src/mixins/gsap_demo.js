import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// intersection observer
// import {intersection} from '@/mixins/intersection'
// gsap
// import {animations} from '@/mixins/animations'
// import { staggerUp, fadeIn } from '../mixins/gsap_demo'

export function banner() {
tl.to("#banner", {duration: 1, x: 50, y: 0})
  .from("h1", {autoAlpha: 0, y: -100})
  .to("h3", {duration: 1, backgroundColor: "red"})
  .to(".button-cta", {duration: 3, x: 100});
}

    export function staggerUp() {
        gsap.utils.toArray('.up').forEach(up => {
            ScrollTrigger.create({
                trigger: up,
                stagger: 1,
                duration: 2,
                ease: 'expo',
                toggleClass: 'fade-up'
                });
            });
        }
    
    export function fadeIn() {
        gsap.utils.toArray('.fade').forEach(fade => {
            ScrollTrigger.create({
                trigger: fade,
                stagger: 2,
                duration: 2,
                ease: 'expo',
                toggleClass: 'fade-in'
                });
            });
        }


//     const fadeUp = document.querySelectorAll('.up');

// fadeUp.forEach((section, index) => {
//   gsap.to(section, {
//       autoAlpha: 1,
//       duration: 1, 
//         backgroundColor: "#E9E9E9", 
//        ease: "expo",
//     scrollTrigger: {
//       trigger: fadeUp,
//       start: 'top bottom-=100',
//       toggleActions: 'play none none reverse',
//       // markers: true
//     }
//   });
  
//   ScrollTrigger.create({
//     trigger: section,
//     id: index+1,
//     start: 'top center',
//     end: () => `+=${section.clientHeight + 30}`,
//     toggleActions: 'play reverse none reverse',
//     toggleClass: {targets: section, className: "is-active"},
//     // markers: true
//   })

// })
        