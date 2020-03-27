window.onload = function () {
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ketihuan").innerHTML = xhttp.response;
      }
    };
    xhttp.open("GET", "html/javaOOP.html", true);
    xhttp.send();
  }
  document.getElementById("ceshi").addEventListener("click", loadDoc);

// document.getElementsByTagName("div a")
  function loadHtml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ketihuan").innerHTML = xhttp.response;
      }
    };
    xhttp.open("GET", "html/javaOOP.html", true);
    xhttp.send();
  }
  document.getElementById("web").addEventListener("click", loadHtml);







}
