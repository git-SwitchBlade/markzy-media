 const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const menuToggleOpen = document.querySelector("#menu-toggle-open");
const menuToggleClose = document.querySelector("#menu-toggle-close");
const menu = document.querySelector(".menu");

const tl = gsap.timeline({
  paused: true
});

tl.to(".menu", {
  x: 0,
  duration: 0.6,
  ease: "expo.inOut"
});

tl.from(".menu nav a", {
  y: 40,
  opacity: 0,
  duration: 0.4,
  ease: "expo.out",
  stagger: 0.1
});



menuToggleOpen.addEventListener("click", () => tl.play());
menuToggleClose.addEventListener("click", () => tl.reverse());
