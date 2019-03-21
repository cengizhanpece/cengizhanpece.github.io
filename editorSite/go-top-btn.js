window.onscroll = function() {backToTop()};
var goTopBtn = document.getElementById("backToTop");
function backToTop() { /* JUST BUTTON ANIMATE */
    
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("backToTop").style.transform="scale(1)";
  } 
    else {
        document.getElementById("backToTop").style.transform="scale(0)";
  }
    
}
function goTop(){ /* GO TOP FUNC */
    var timeout;
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0,-50);
        timeout=setTimeout('goTop()',10)
    }
    else{
        window.clearTimeout(timeout);
    }
}