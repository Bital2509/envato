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

let ButtonImgOne = document.getElementById('button-img-one');
let ButtonImgTwo = document.getElementById('button-img-two');
let ButtonImgThree = document.getElementById('button-img-three');
let ButtonImgFour = document.getElementById('button-img-four');

let EventTextOne = document.getElementById('event-text-one');
let EventTextTwo = document.getElementById('event-text-two');
let EventTextThree = document.getElementById('event-text-three');
let EventTextFour = document.getElementById('event-text-four');

let EventButtonOne = document.getElementById('event-button-one');
let EventButtonTwo = document.getElementById('event-button-two');
let EventButtonThree = document.getElementById('event-button-three');
let EventButtonFour = document.getElementById('event-button-four');

EventButtonOne.addEventListener('click', function () {
    EventTextOne.classList.toggle('event-text_active');
    ButtonImgOne.classList.toggle('button-img_active');
});
EventButtonTwo.addEventListener('click', function () {
    EventTextTwo.classList.toggle('event-text_active');
    ButtonImgTwo.classList.toggle('button-img_active');
});
EventButtonThree.addEventListener('click', function () {
    EventTextThree.classList.toggle('event-text_active');
    ButtonImgThree.classList.toggle('button-img_active');
});
EventButtonFour.addEventListener('click', function () {
    EventTextFour.classList.toggle('event-text_active');
    ButtonImgFour.classList.toggle('button-img_active');
});