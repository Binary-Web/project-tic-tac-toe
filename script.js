const btnCell = document.querySelectorAll('.btn-cell');

btnCell.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(button.childNodes)
    });
})