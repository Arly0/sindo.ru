$(function () {
    // проверка "бургера" на нажатие
     $('#toggle').on('change', function(){
        if($('#toggle').prop('checked')){
            // если нажат - меню выпадает в колонку
            $('.menu-hide').css({'display': 'block'});
            $('.menu').removeClass('d-flex');
        }
        else {
            //если галка снята - меню убирается и вновь распологается в строку
            $('.menu-hide').css({'display': 'none'});
            $('.menu').addClass('d-flex');
        }
    });
});