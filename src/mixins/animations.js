import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animations = {
  data() {
    return {

    }
  },
    methods: {
        background() {
          gsap.to(".red", {
            scrollTrigger: {
              trigger: ".red",
              toggleActions: "restart pause reverse pause"
            }, 
            duration: 1, 
            backgroundColor: "#FFA500", 
            // backgroundColor: bgColor, 
            ease: "none"
          });
        },
        staggerUp() {
          gsap.defaults({ease: "power3"});
          gsap.set(".up", {y: 100});

          ScrollTrigger.batch(".box", {
            //interval: 0.1, // time window (in seconds) for batching to occur. 
            //batchMax: 3,   // maximum batch size (targets)
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
            // you can also define things like start, end, etc.
          });
        }
      },
}
