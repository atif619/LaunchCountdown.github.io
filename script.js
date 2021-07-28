let launchDate = new Date('aug 24,2022 12:00:00').getTime();

function clock() {

    var Day = document.getElementById("day");
    var Hours = document.getElementById("hour");
    var Minutes = document.getElementById("minutes");
    var Seconds = document.getElementById("seconds");

    let now = new Date().getTime();

    let diff = launchDate - now;

    let d = Math.floor(diff / (1000 * 24 * 60 * 60));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diff % (1000 * 60)) / 1000);

    if (d < 10) {
        d = "0" + d;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    Day.innerHTML = d;
    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;

}
setInterval(clock, 1000);
