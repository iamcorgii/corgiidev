var phrases = [
    "please don't read my html.",
    "blame alpha.",
    "i protect my upgrades with xena.defender!",
    "rip kotlc - lost but never forgotten ;(",
    "jennifer dumped me.",
    "console.log('go outside, sweaty.');",
    "this website is objectively not funny.",
    "woof. woof. woof. woof. woof. woof.",
    "the carbuncle ate itself.",
];

function getRndInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = getRndInteger(phrases.length);
        this.wait = parseInt(wait, 12);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove characters
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add charaters
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 50;

        if (this.isDeleting) {
            // Increase speed by half when deleting
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            // Move to next word
            var lastIndex = this.wordIndex;
            while (this.wordIndex == lastIndex) {
                this.wordIndex = getRndInteger(phrases.length);
            }
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = phrases;
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}