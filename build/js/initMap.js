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