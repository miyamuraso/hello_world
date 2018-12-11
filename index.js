document.getElementById("text-button").onclick = function() {
    document.getElementById("text").innerHTML = "クリックされた！";
  };
  document.getElementById("square-button").onclick = function() {
    this.classList.toggle("blue");
  };
    