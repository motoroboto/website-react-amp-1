window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.width = "50vw";
    document.getElementById("mainNav").style.transition = "width .75s";

    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("mainNav").style.width = "90vw";
    document.getElementById("mainNav").style.transition = "width .5s";

    // document.getElementById("logo").style.fontSize = "35px";
  }
}
