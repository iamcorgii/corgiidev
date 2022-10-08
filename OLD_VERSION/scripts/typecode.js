const splashEl = document.getElementById("content")
const contentEl = document.getElementById("content")
const quoteEl = document.getElementById("content")

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
            quoteEl.innerHTML = curQuote
            quote = quote.slice(1)
        } else {
            clearInterval(inEff);
        }
    }, 30);

}

let code = '<div id="nav_container"> <div> <a class="button current-page">[home]</a></div> <div> <a class="button" href="./pages/bio.html">[bio]</a></div> <div> <a class="button">[projects]</a></div> <div> <a class="button">[contact]</a></div> <div> <a class="button">[support]</a></div> </div> <hr> <br> <ul> <li>hello, welcome to corgii.dev.</li> <li>this is my personal portfolio of stuff i build.</li> <li>i am not a front end developer.</li> </ul> <br> <hr> <pre><span class="crt"> _ _ | |_|_|___ | . | | . | |___|_|___|</span> </pre> <ul> <li>i go by corgii on the internet. i am a third year software engineering student in the US.</li> <li>i primarily work in java and python. i am currently learning js in my offtime from college.</li> <li>you can find me on discord @ corgii#5866 or on twitter @iamcorgii</li> <li><a href="https://github.com/iamcorgii"><button>github</button></a> | <a href="https://twitter.com/iamcorgii"><button>twitter</button></a> | <a href="./pages/support.html"><button id="support-btn">support me!</button></a></li> </ul> <hr> <pre><span class="crt"> _ _ ___ ___ ___|_|___ ___| |_ ___ | . | _| . | | -_| _| _|_ -| | _|_| |___| |___|___|_| |___| |_| |___| </span></pre> <dl> <dt><a class="project_title" href="http://www.twitter.com/corgieveryhour">&lt;corgieveryhour&gt;</a></dt> <dd>> twitter bot that posts a picture of a corgi every hour. used to automatically follow relevant users but twitter didn\'t like that</dd> <dd>> mostly functional but has really ugly code. going to rewrite eventually so it stops breaking.</dd> <dd>> progress: <div class="progressBar">██████████⠀⠀⠀⠀⠀⠀⠀⠀⠀</div> 50% </dd> <br> <dt><a href="https://www.youtube.com/watch?v=f5KyMNDJE6o">&lt;more&gt;</a></dt> <dd>> coming soon</dd> </dl>'
subtitleAnimation(code)