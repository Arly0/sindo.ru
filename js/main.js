// плавные переход на странице (х2)
$(document).ready(function(){
    $("#info__send").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $(".menu__item").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
// закрытие модульного окна / открытие
$(function () {
   $('.btn').click(function () {
      $('#modal2').addClass('show-modal-block');
   });
});
$(function () {
   $('.modal2__close').click(function () {
       $('#modal2').removeClass('show-modal-block');
   }) ;
});

function initMap(){
    //координаты размещения карты
    let coordmap   = {lat:47.9387592,lng:33.4180593},
        //массив с координатами маркеров
        locations = [
            [48.0012771,33.4895862],
            [47.9028576,33.3747418],
            [47.899114,33.3337909],
            [47.9384018,33.4139298]
        ],
        // coordfirst = {lat:48.0012771,lng:33.4895862},
        // coordsec   = {lat:47.9028576,lng:33.3747418},
        // coordthird = {lat:47.899114,lng:33.3337909},
        // coordfour  = {lat:47.9384018,lng:33.4139298},
        // зум
        zoom = 11,
        // scrollwheel: false,
        //спавн карты на месте блока с координатами центра и зумом
        map = new google.maps.Map(document.getElementById('map__googlemap'),{center:coordmap,zoom:zoom});
        let i, marker;
        for (i = 0; i < locations.length; i++)
            //добавление маркеров через массив
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0],locations[i][1]),
            map: map
        });
}

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

// свап тренера
$(function () {
    let arrSens = [
        ["img/karate-Nazar.jpg","Назар Горбунов","https://twitter.com/Arly010","https://www.instagram.com/arly0_/?hl=en\,","https://soundcloud.com/arly0","Назар Горбунов dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."],
        ["img/karate-Sergey.jpg","Сергей Карасев","https://twitter.com/SeniorJun","https://www.instagram.com/sergi_karasev/?hl=en","https://soundcloud.com/chimchar13","Сергей Карасев dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."]
        ],
        i = 0;
    $('.sensei__awesome').click(function () {
        i++;
        if(i == arrSens.length)
            i = 0;
            $('.about-sensei__img').animate({opacity: '0'}, 500, function () {
                $(this).attr("src", arrSens[i][0]);
                $(this).animate({opacity: '1'}, 500);
            });
        $('.about-sensei__name').animate({opacity: '0'}, 500, function () {
                $(this).text(arrSens[i][1]);
                $(this).animate({opacity: '1'}, 500);
            });
        $('.twitter').attr("href",arrSens[i][2]);
        $('.facebook').attr("href",arrSens[i][4]);
        $('.instagarm').attr("href",arrSens[i][3]);
        $('.sensei-text').animate({opacity: '0'}, 500, function () {
            $(this).text(arrSens[i][5]);
            $(this).animate({opacity: '1'}, 500);
        });
    });
});

//mask of telephone
$(function(){
    $("#phone").mask("+380(99) 999-99-99");
});
