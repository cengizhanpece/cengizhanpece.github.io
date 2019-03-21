var active = 1;
var button = false;
var timer = null;
var counter = 2;
setInterval(function () {

    if (button == false) {
        if (counter <= document.getElementById("foto").childElementCount) {
            btn(counter);
            counter++;
        } else {
            counter = 1;
            btn(counter);
        }
    }
}, 1000);

function btn(kod) {
    button = true;
    if (kod > active) {
        var activeId = 'photo-' + active;
        document.getElementById(activeId).className = "slider-photo x0-100";
        document.getElementById(activeId).style.transform = ("translateX(-100%)")
        var newId = 'photo-' + kod;
        document.getElementById(newId).className = "slider-photo x100-0";
        document.getElementById(newId).style.transform = ("translateX(0%)")
        active = kod;
    } else if (kod < active) {
        var activeId = 'photo-' + active;
        document.getElementById(activeId).className = "slider-photo x-0100";
        document.getElementById(activeId).style.transform = ("translateX(100%)");
        var newId = 'photo-' + kod;
        document.getElementById(newId).className = "slider-photo x-100-0";
        document.getElementById(newId).style.transform = ("translateX(0%)")
        active = kod;
    }
    sifirla();
}

function sifirla() {
    clearTimeout(timer);
    timer = window.setTimeout(function () {
        button = false;
    }, 4000);
}