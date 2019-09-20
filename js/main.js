$(document).foundation()
(() => {
    var location = [42.983702, -81.250572];

    function showOurLoc() {
        var latLng = new google.maps.LatLng(position['42.983702'], position[ '-81.250572']);
    
        var mapOptions = {
            zoom: 16,
            streetViewControl: false,
            scaleControl: true,
            mapTypeId: google.maps.mapTypeId.ROADMAP,
            center: latLng
        };
    
        map = new google.maps.Map(document.getElementById('googlemap'),
        mapOptions);
    
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
        });
    }
    
    
    google.maps.event.addDomListener(window, 'load', showOurLoc)
})();

