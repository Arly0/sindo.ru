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
    let coordmap   = {lat:47.9387592,lng:33.4180593},
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
        zoom = 11,
        // scrollwheel: false,
        map = new google.maps.Map(document.getElementById('map__googlemap'),{center:coordmap,zoom:zoom});
        let i, marker;
        for (i = 0; i < locations.length; i++)
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0],locations[i][1]),
            map: map
        });
}