function resizeOfWin() {
    // проверка на разрешение и расположение меню в зависимости от первого
    let win = window.matchMedia('(min-width:992px)');
    if(win.matches){
        $('.menu-hide').css({'display': 'block'});
        $('.menu').addClass('d-flex');
    }
    else
    {
        $('.menu-hide').css({'display': 'none'});
        $('.menu').removeClass('d-flex');
    }
}
$(window).resize(function () {
   resizeOfWin(); // запускает функцию проверки на разрешение окна
});
