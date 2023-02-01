window.addEventListener('load', () => {
    const buttonRight = document.getElementById('suiv');
    const buttonLeft = document.getElementById('prec');

    buttonRight.onclick = function () {
        document.getElementById('commentCat').scrollLeft += 850;
    };

    buttonLeft.onclick = function () {
        document.getElementById('commentCat').scrollLeft -= 850;
    };
});
