const $day = document.getElementById('day')
const $hour = document.getElementById('hour')
const $minute = document.getElementById('minute')
const $second = document.getElementById('second')

const targetDate = new Date('March 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        $day.innerText = '0';
        $hour.innerText = '0';
        $minute.innerText = '0';
        $second.innerText = '0';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $day.innerText = days;
    $hour.innerText = hours;
    $minute.innerText = minutes;
    $second.innerText = seconds;
}