const numberwindow = new bootstrap.Modal('#numberwindow')
const mainwindow = new bootstrap.Modal('#mainwindow')
const resultwindow = new bootstrap.Modal('#resultwindow')

let start;

let safe = false;

function setsafe() {
    if (safe) { safe = false; }
    else { safe = true; }
}

function guess(e) {
    e.preventDefault();
    numberwindow.hide();
    mainwindow.show();

    const cislicko = $("#inputik").val();

    animace = setInterval(() => animate(), (20*1000) / 100);

    start = Date.now();

    $("#pepa").text("Asking ChatGPT")
    setTimeout(() => {
        if (!safe) { 
            $("#pepa").text("Asking austrian painter 🫡🙋🙋 🇦🇹🇩🇪");
        } else {
            $("#pepa").text("Reading your mind");
        }
        setTimeout(() => {
            if (!safe) {
                $("#pepa").text("Asking the Supreme Leader of Democratic People's republic of Korea Kim Jong Un  🇰🇵 🇰🇵 🇰🇵 ☭☭☭");
            } else {
                $("#pepa").text("Making a random guess");
            }
            setTimeout(() => {
                $("#pepa").text("Asking random AI (actually an indian)")
                setTimeout(() => {
                    numberwindow.hide();
                    mainwindow.hide();
                    resultwindow.show();
                    $("#result").text("Your number is: " + cislicko)
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);
}

var animace;
i = 0
function animate() {
    i++;
    $("#idk").css("width", i + "%");

    if (!(i < 100)) clearInterval(animace) ;
}
