function toggle(ev) {
    ev.preventDefault();
    const $newsletter = document.querySelector('.newsletter');
    $newsletter.classList.toggle('active');
}