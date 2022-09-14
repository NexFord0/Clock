let date = new Date();
let hour = date.getHours()%12,
    minutes = date.getMinutes(),
    second = date.getSeconds();
let h, min, sec;

const init = () => {
    h = document.getElementById("hour");
    min = document.getElementById("minute");
    sec = document.getElementById("second");
    change_time();
    setInterval(change_time, 1000);
}

const change_time = () => {
    second++;
    if (second >= 60) {
        second = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hour++;
            if (hour >= 12) {
                hour = 0;
            }
        }
    }
    sec.style.rotate = `${second/60}turn`;
    min.style.rotate = `${(second/60+minutes)/60}turn`;
    h.style.rotate = `${((second/60+minutes)/60+hour)/12}turn`;
}

