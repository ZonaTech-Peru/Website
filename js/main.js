const $btnNotify = document.getElementById('notify')
const $btnClose = document.getElementById('closeNewsletter')

$btnNotify.addEventListener('click', toggle);
$btnClose.addEventListener('click', toggle);

setInterval(updateCountdown, 1000);