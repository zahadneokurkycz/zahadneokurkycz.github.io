function guess() {
  const number = prompt("Write your number that I am gonna guess");
  if (number === null) return;

  document.getElementById("pepa").innerHTML = "Asking CHATGPT";
  setTimeout(() => {
    document.getElementById("pepa").innerHTML = "Asking Pepa Pig";
    setTimeout(() => {
      document.getElementById("pepa").innerHTML = "Asking YOUR MOM";
      setTimeout(() => {
        document.getElementById("pepa").innerHTML = "Asking random AI (actually an indian)";
        setTimeout(() => {
          document.getElementById("pepa").innerHTML = "Your number is: " + number;
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}
