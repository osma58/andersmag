gsap.from(".cls-6", {duration: 2, opacity:1.5, scale: 0.3, ease: "bounce"});
gsap.from(".cls-5", {duration: 2, opacity:0, y: () => Math.random()
*400 - 200, stragger: 0.25});
gsap.from(".cls-3", {duration: 3,  y: () => Math.random()
*400 - 200, stragger: 0.3});
gsap.from(".cls-4", {duration: 3,  y: () => Math.random()
 *400 - 200, stragger: 0.4});
gsap.from(".cls-2", {duration: 3,  y: () => Math.random()
            *400 - 200, stragger: 0.5});
            gsap.from(".cls-1", {duration: 2, opacity:0, scale: 0.3, ease: "power2"});
            gsap.from("#_g_", {duration: 2, opacity:0, scale: 0.3, ease: "power1"});
           
