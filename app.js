const tl = gsap.timeline({ defaults: { ease: "power1.out" }});

// timeine to the classlist "".text", move the text back to default with "y: 0%", the duration of the movement, to make it go one line at a time with "stagger: 0.25"
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", { y: "-100%", duration: 1},"-=0.9");
tl.fromTo('nav', { opacity: 0}, { opacity: 1, duration: 1}); 
tl.fromTo('.big-text', { opacity: 0}, { opacity: 1, duration: 1},"-=1"); 
