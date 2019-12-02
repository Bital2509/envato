
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');

function datanow() {
    let date = new Date();

    let daysOne = date.getDay();
    let hoursOne = date.getHours();
    let minutesOne = date.getMinutes();
    let secondOne = date.getSeconds();
    days.innerHTML = daysOne;
    hours.innerHTML = hoursOne;
    minutes.innerHTML = minutesOne;
    second.innerHTML = secondOne;
    setTimeout(datanow, 1000);
}

datanow();
