function plus()
{

    document.getElementById("input").value = document.getElementById("input").value + " + ";
}

function minus()
{
    document.getElementById("input").value = document.getElementById("input").value + " - ";
}

function nasob()
{
    document.getElementById("input").value = document.getElementById("input").value + " * ";
}

function del()
{
    document.getElementById("input").value = document.getElementById("input").value + " / ";
}

function modulus()
{
    document.getElementById("input").value = document.getElementById("input").value + " % ";
}

function odmocniny()
{
    document.getElementById("input").value = document.getElementById("input").value + " ** ";
}

function wait()
{
    document.getElementById("note").innerHTML = "Prosím, čekejte na zpracování požadavku...";
}

function online() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.responseText == 'true')
        {
              document.getElementById("note").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "solver.txt");
    xhttp.send();
  }

function jedna()
{
    document.getElementById("input").value = document.getElementById("input").value + "1";
}

function dva()
{
    document.getElementById("input").value = document.getElementById("input").value + "2";
}

function tri()
{
    document.getElementById("input").value = document.getElementById("input").value + "3";
}

function ctyri()
{
    document.getElementById("input").value = document.getElementById("input").value + "4";
}

function pet()
{
    document.getElementById("input").value = document.getElementById("input").value + "5";
}

function sest()
{
    document.getElementById("input").value = document.getElementById("input").value + "6";
}