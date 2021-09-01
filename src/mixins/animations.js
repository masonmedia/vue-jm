import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animations = {
  data() {
    return {

    }
  },
    methods: {
        banner() {
          const tl = gsap.timeline({ defaults: {duration: 0.5, ease: "back"} } );
          tl.from(".site-title", {x: -80, opacity: 0}) //child tweens will inherit the duration and from the parent timeline!
            .from(".site-subtitle", {x: -80, opacity: 0})
            .from(".banner-cta", {x: -80, opacity: 0})
            .from(".bg-sand", {opacity: 0})
            .from("img", {opacity: 0});
        },
        bgLight() {
          gsap.to('.light', {
            scrollTrigger: {
              trigger: ".light",
              toggleActions: "restart pause reverse pause"
            }, 
            duration: 1, 
            backgroundColor: "#f8f9fa", 
            ease: "none"
          });
        },
        bgLinen() {
          gsap.to(".linen", {
            scrollTrigger: {
              trigger: ".linen",
              toggleActions: "restart pause reverse pause"
            }, 
            duration: 1, 
            backgroundColor: "#E9E9E9", 
            ease: "none"
          });
        },
        staggerUp() {
          // gsap.defaults({ease: "power3"});
          gsap.defaults({ease: "back.inOut(1)", duration: 1.5});

          ScrollTrigger.batch(".up", {
            //interval: 0.1, // time window (in seconds) for batching to occur. 
            //batchMax: 3,   // maximum batch size (targets)
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
            // you can also define things like start, end, etc.
          });
        },
        fade() {
          gsap.utils.toArray('.fade').forEach(section => {
            gsap.to(section, {
              y: 0,
              backgroundColor: '#D6D6D6',
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                scrub: true,
                // markers: true
              }
            });
          });
        },
      },
      mounted() {
        this.fade();
        this.banner();
        this.bgLinen();
        this.bgLight();
        this.staggerUp();
       
      }
}


