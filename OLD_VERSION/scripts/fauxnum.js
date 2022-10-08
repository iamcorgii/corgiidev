function makeid(length, characterstring) {
    var result           = '';
    var characters       = characterstring;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var articles = document.getElementById("ffaauuxx");
var fauxsec = document.getElementById('FAUX');

articles.addEventListener("click", function(){
    fauxsec.style.display = "block";

    setInterval(function() {
        document.getElementById("fauxnum").innerHTML = Math.floor(Math. random() * 9);
      }, 75);
      
    setInterval(function() {
          document.getElementById("fauxbar").innerHTML = makeid(20, '_?____');
      }, 75);
      
      function genFauxText1() {
          document.getElementById("fauxtext1").innerHTML = makeid(80, ' abcdefghijklmnopqrstuvwxyz!?.,');
      }
      function genFauxText2() {
          document.getElementById("fauxtext2").innerHTML = makeid(140, ' abcdefghijklmnopqrstuvwxyz!?.,');
      }

    genFauxText1();
    genFauxText2();
});