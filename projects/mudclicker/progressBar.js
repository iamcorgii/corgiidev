var t1 = {
    name: "t1",
    count: 0,
    rate: .5,
    cooldown: false
}


function move(item) {
    if (item.cooldown == true) {
        return;
    }
    item.cooldown=true;
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById(item.name+"Bar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                width = 0;
                elem.style.width = "1%"
                item.count++;
                document.getElementById("t1count").innerHTML = item.count;
                item.cooldown = false;
                receiveGC(item.name);
            } else {
                width+=item.rate;
                elem.style.width = width + "%";
            }
        }
    }
}


function receiveGC(name) {
    var element = document.getElementById(name + "Received");
    element.innerHTML = "received xxx,xxx gc";
    var opac = 100;
    var fadeText = setInterval(fadeGC, 10);
    function fadeGC() {
        if (opac <= 0) {
            clearInterval(fadeText);
            opac = 0;
        } else {
            opac-=.5;
            element.style.opacity = opac/100;
        }
    }
}

window.onload = function(){ 
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
};


