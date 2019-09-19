$(document).foundation()
(() => {

      function ourMap() {
        // The location of Hatch
        var hatch = {lat: 42.983702, lng:  -81.250572};
        // The map, centered at Hatch
        var map = new google.maps.Map(
            document.getElementById('ourLoc'), {zoom: 4, center: hatch});
        // The marker, positioned at hatch
        var marker = new google.maps.Marker({position: hatch, map: map});

    google.maps.event.addDomListener(window, 'load', ourMap);
    debugger;
})();
