document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('accordion-item_open')
    });
});