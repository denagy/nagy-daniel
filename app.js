
function myFunction(x) {
  document.getElementById("drp").classList.toggle("show");
  x.classList.toggle("change");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



