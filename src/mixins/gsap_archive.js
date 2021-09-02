
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