function myFunction() {
    var x = document.getElementById("header-2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function cross(y) {
    y.classList.toggle("change");
  }
  function search(){
    var input, filter, imagecontainer, card, p, i, txtValue, downinput;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    imagecontainer= document.getElementById("image-container");
    card= imagecontainer.getElementsByTagName("div");
    for (i = 0; i < card.length; i++) {
        p= card[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
  }
  function search2(){
    var input, filter, imagecontainer, card, p, i, txtValue, downinput;
    input = document.getElementById("myInput-2");
    filter = input.value.toUpperCase();
    imagecontainer= document.getElementById("image-container");
    card= imagecontainer.getElementsByTagName("div");
    for (i = 0; i < card.length; i++) {
        p= card[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
  }