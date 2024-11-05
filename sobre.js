gsap.registerPlugin(ScrollTrigger);
console.clear(); // Start with a clean console on refesh 
const cardWrappers = gsap.utils.toArray(".card-wrapper");

const scaleMax = gsap.utils.mapRange(1, document.querySelectorAll(".card").length - 1, 0.8, 1); // Convert values we know to values we want https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()
const time = 2;

gsap.set(cardWrappers, { // Set up the cards styling
    y: (index) => 30 * index, // set offset
    transformOrigin: "center top",
})

//--------------------------------//
// The animation 
//--------------------------------//
const tl = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: `${window.innerHeight * 5} top`,
        scrub: true,
        // pin: true,
        markers: true,
    }
});
tl.from('.card-container', { // Move the card stack from the bottom of the screen
        y: () => window.innerHeight / 2,
        duration: 1,
    })
    // Animte cards up from off screen one by one.
tl.from(".card-wrapper:not(:first-child)", {
    y: () => window.innerHeight,
    duration: time / 2,
    stagger: time
});

// 
tl.to(
    ".card-wrapper:not(:last-child)", {
        rotationX: -20,
        scale: (index) => scaleMax(index), // dynamlicly get scale based on the index of the current card
        stagger: {
            each: time
        }
    },
    "<" // Start tween when the first cards has done animating
);


ScrollTrigger.refresh(); // Refresch ScrollTrigger to get all the values
const end = tl.scrollTrigger.end;

ScrollTrigger.create({ // Extra ScrollTrigger just for pinning
    trigger: ".extra-trigger",
    start: "top top",
    end: () => end, // Set the end the same as the previous ScrollTrigger
    pin: true,
    markers: { startColor: "fuchsia", endColor: "fuchsia" }
});