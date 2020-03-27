window.onload = function () {
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ketihuan").innerHTML = xhttp.response;
      }
    };
    xhttp.open("GET", "html/javaSE.html", true);
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
    xhttp.open("GET", "html/htmlcss.html", true);
    xhttp.send();
  }
  document.getElementById("htmlcss").addEventListener("click", loadHtml);

document.getElementById("web").addEventListener("click",function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ketihuan").innerHTML = xhttp.response;
    }
  };
  xhttp.open("GET", "html/weblist.html", true);
  xhttp.send();
})






}
