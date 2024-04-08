const container = document.querySelector('body')

gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".flair", "x", {duration: 0.8, ease: "power3"}),
    yTo = gsap.quickTo(".flair", "y", {duration: 0.8, ease: "power3"});

container.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});