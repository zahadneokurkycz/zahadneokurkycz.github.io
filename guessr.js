function guess() {
  const number = prompt("Write your number that I am gonna guess");
  if (number === null) return;

  document.getElementById("pepa").innerHTML = "Asking CHATGPT";
  //document.getElementById("idk").style.width = "100%";
  $("#idk").animate({
    width: "20%"
}, 1000)
  setTimeout(() => {
    document.getElementById("pepa").innerHTML = "Asking Pepa Pig";
    $("#idk").animate({
    width: "40%"
}, 1000)
    setTimeout(() => {
      document.getElementById("pepa").innerHTML = "Asking YOUR MOM";
      
      $("#idk").animate({
    width: "60%"
}, 1000)
        setTimeout(() => {
        document.getElementById("pepa").innerHTML = "Asking random AI (actually an indian)";
        $("#idk").animate({
    width: "80%"
}, 1000)
          setTimeout(() => {
            $("#idk").animate({
    width: "100%"
}, 1000)
            document.getElementById("pepa").innerHTML = "Your number is: " + number;
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}
