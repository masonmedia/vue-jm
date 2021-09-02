import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animations = {
  data() {
    return {

    }
  },
    methods: {
        // banner() {
        //   const tl = gsap.timeline({ defaults: {duration: 0.5, ease: "back"} } );
        //   tl.from(".site-title", {x: -80, opacity: 0}) //child tweens will inherit the duration and from the parent timeline!
        //     .from(".site-subtitle", {x: -80, opacity: 0})
        //     .from(".banner-cta", {x: -80, opacity: 0})
        //     .from(".bg-sand", {opacity: 0})
        //     .from("img", {opacity: 0});
        // },
        staggerUp() {
          ScrollTrigger.batch(".up", {
            onEnter: (elements) => {
            gsap.from(elements, {
              // interval: 0.1, // time window (in seconds) for batching to occur. 
              // start: 'top bottom-=1',
              trigger: ".up",
              start: "-50% bottom",
              // start: '20px bottom',
              end: '+=200',                  
              // scrub: 1,
              autoAlpha: 0, 
              y: 50,
              stagger: 0.5,
              duration: 1.5,
              ease: "back",
              // once: true
              });
            console.log(elements.length, "elements entered");
          },
       });
        },
        fade() {
          gsap.utils.toArray('.fade').forEach(section => {
            gsap.to(section, {
              backgroundColor: '#D6D6D6',
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                // scrub: true,
                // markers: true
              }
            });
          });
        },
      },
      mounted() {
        this.fade();
        this.staggerUp();
        
      }
}


