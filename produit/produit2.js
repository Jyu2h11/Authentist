window.addEventListener('load', () => {
    const buttonRight = document.getElementById('suiv1');
    const buttonLeft = document.getElementById('prec1');
    const buttonRight2 = document.getElementById('suiv2');
    const buttonLeft2 = document.getElementById('prec2');

    buttonRight.onclick = function () {
        document.getElementById('slide1').scrollLeft += 850;
    };

    buttonLeft.onclick = function () {
        document.getElementById('slide1').scrollLeft -= 850;
    };

    buttonRight2.onclick = function () {
        document.getElementById('slide2').scrollLeft += 850;
    };

    buttonLeft2.onclick = function () {
        document.getElementById('slide2').scrollLeft -= 850;
    };
});
