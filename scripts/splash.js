const splashEl = document.getElementById("splash")
const contentEl = document.getElementById("content")
const quoteEl = document.getElementById("splash_quote")

function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.05;
        } else {
            fadeTarget.style.display = "none"
            clearInterval(fadeEffect);
        }
    }, 50);
}

function fadeInEffect(inEl) {
    inEl.style.opacity = 0
    var inEff = setInterval(function () {
        if (inEl.style.opacity < 1) {
            console.log(inEl.style.opacity)
            inEl.style.opacity = Number(inEl.style.opacity) + 0.025;
            console.log(Number(inEl.style.opacity) + 0.025)
        } else {
            clearInterval(inEff);
        }
    }, 50);
}

function subtitleAnimation(quote) {
    let i = 0
    let curQuote = ""
    var inEff = setInterval(function () {
        if (quote.length > 0) {
            curQuote += quote[0]
            quoteEl.innerHTML = curQuote + '<a class="blink">|</a>'
            quote = quote.slice(1)
        } else {
            clearInterval(inEff);
        }
    }, 50);

}
subtitleAnimation("Zamn, terrance!")
setTimeout(function() {
    fadeOutEffect(splashEl)
  }, 3000);

setTimeout(function() {
    contentEl.style.display = "block"
    fadeInEffect(contentEl)
  }, 3000);