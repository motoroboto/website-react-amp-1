window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myName").style.background = "transparent !important";
    document.getElementById("nyName").style.transition = "background .75s";
    
  } else {
    document.getElementById("nyName").style.background = "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));";
    document.getElementById("nyName").style.color = "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));";
    document.getElementById("nyName").style.transition = "background .5s";
  }
}