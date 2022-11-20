// This is a file containing code for operating a simple slideshow on my website
// V1 - David Reti - 2022
// Any errors should be reported by sending me a message from my home page

const SHOWCASE_CARD_SELECTOR = '.projects-page__showcase__slideshow__card' 
let cards = document.querySelectorAll(SHOWCASE_CARD_SELECTOR)

// My page is meant to work without javascript - the first step is to enable any javascript-operated elements, and remove placeholders
let enable = (selector, display = "inline-block") => 
    document.querySelectorAll(selector).forEach(element => element.style.display = display);

enable(SHOWCASE_CARD_SELECTOR);
enable('button[class*="projects-page"]');

// We keep a circular buffer of the class names to apply, and loop through it
let classes = ["first", "second", "third", "fourth"];

function apply() {
    cards.forEach((card, i) => {
        card.classList.replace(card.classList[card.classList.length - 1], classes[i]);
    });
}

function left() {
    classes.push(classes.shift());
    apply();
}

function right() { 
    classes.unshift(classes.at(-1));
    classes.pop();
    apply();
}

