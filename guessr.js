function guess() {
  let confirm = prompt("Write your number that I am gonna guess")
  document.getElementById("pepa").innerHTML = "Asking CHATGPT";
  setTimeout(() => {
    document.getElementById("pepa").innerHTML = "Asking Pepa Pig";
    setTimeout(() => {
      document.getElementById("pepa").innerHTML = "Asking YOUR MOM";
      setTimeout(() => {
        document.getElementById("pepa").innerHTML = "Asking random AI (actually an indian)";
        setTimeout(() => {
          document.getElementById("pepa").innerHTML = "Your number is: "+confirm;
        },5000)
      },5000)
    },5000)
  },5000)
}
