window.onscroll = function() { handleNav() };

function handleNav() {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector("nav").className = "scrolled";
  } else {
    document.querySelector("nav").className = "";
  }
}