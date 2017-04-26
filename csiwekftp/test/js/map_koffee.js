
    var map;
    var providers = [];
    var infoWindow;
    var locationSelect;
    var $link = $('');

    function load() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(34.0500, -118.2500),
            zoom: 10,
            mapTypeId: 'roadmap',
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            scrollwheel: false
        });
        infoWindow = new google.maps.InfoWindow();

        // locationSelect = document.getElementById("locationSelect");

        // locationSelect.onchange = function(){
        //     var markerNum = locationSelect.options[locationSelect.selectedIndex].value;

        //     if (makerNum != "none"){
        //         google.maps.event.trigger(providers[markerNum], 'click');
        //     }
        // };
    }

    function searchLocations(){
        console.log('clicked');
        var address = document.getElementById('addressInput').value;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                var addressComponent = results[0].address_components;
                var zipCode = '';
                for (var x = 0 ; x < addressComponent.length; x++) {
                    var chk = addressComponent[x];
                    if (chk.types[0] == 'postal_code') {
                        zipCode = chk.long_name;
                    }
                }
                searchLocationsNear(results[0].geometry.location,zipCode);
            } else {
                alert(address + 'not found');
            }
        });
    }


    // function addressSearch(){
    //     $link.on('click', function(){
    //         var value = $(this).attr('value');
    //         var geocoder = new google.maps.Geocoder();
    //          geocoder.geocode({address: value}, function(results, status){
    //             if (status == google.maps.GeocoderStatus.OK) {
    //                 var addressComponent = results[0].address_components;
    //                 var zipCode = '';
    //                 for (var x = 0 ; x < addressComponent.length; x++) {
    //                     var chk = addressComponent[x];
    //                     if (chk.types[0] == 'postal_code') {
    //                         zipCode = chk.long_name;
    //                     }
    //                 }
    //                 findAddress(results[0].geometry.location,zipCode);
    //             } else {
    //                 alert(address + 'not found');
    //             }
    //         });
    //     })
    // }
    // addressSearch();





    function clearLocations(){
        infoWindow.close();
        for (var i = 0; i < providers.length; i++) {
            providers[i].setMap(null);
        }
        providers.length = 0;

        locationSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "none";
        option.innerHTML = "See all results:";
        locationSelect.appendChild(option);
    }

    function findAddress(center,zipcode) {
        clearLocations();

        var radius = 1;
        var searchUrl = '../location_listxml.php?lang=' + lang + '&lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&zipcode=' + zipcode;
        //console.log(searchUrl);
        downloadUrl(searchUrl, function(data){
            var xml = parseXml(data);
            var locationNodes = xml.documentElement.getElementsByTagName("location");

            if (locationNodes.length === 0){
                 alert('No results found within a ' + radius + ' mile radius of your entry. Please expand your search radius.');
            } else {
                    var bounds = new google.maps.LatLngBounds();
                    var name = locationNodes[0].getAttribute("name");
                    var id = locationNodes[0].getAttribute("id");
                    var contact = locationNodes[0].getAttribute("contact");
                    var address = locationNodes[0].getAttribute("address");
                    var distance = parseFloat(locationNodes[0].getAttribute("distance"));
                    var latlng = new google.maps.LatLng(
                    parseFloat(locationNodes[0].getAttribute("latitude")),
                    parseFloat(locationNodes[0].getAttribute("longitude")));
                    createOption(name, distance, id);
                    createMarker(latlng, name, id, contact, address);
                    bounds.extend(latlng);
                    map.fitBounds(bounds);
                var listener = google.maps.event.addListener(map, "idle", function() {
                    if (map.getZoom() > 16) map.setZoom(16);
                        google.maps.event.removeListener(listener);
                    });

            locationSelect.style.visibility = "visible";
            locationSelect.onchange = function(){
                var markerNum = locationSelect.options[locationSelect.selectedIndex].value;
                google.maps.event.trigger(providers[markerNum], 'click');
            };
        }

        });
    }

    function searchLocationsNear(center,zipcode) {
        clearLocations();

        var radius = document.getElementById("radiusSelect").value;
        var searchUrl = '../provider_listxml.php?lang=' + lang + '&lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&zipcode=' + zipcode;
        //console.log(searchUrl);
        downloadUrl(searchUrl, function(data){
            var xml = parseXml(data);
            var locationNodes = xml.documentElement.getElementsByTagName("location");

            if (locationNodes.length === 0){
                 alert('No results found within a ' + radius + ' mile radius of your entry. Please expand your search radius.');
            } else {
                    var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < locationNodes.length; i++) {
                    var name = locationNodes[i].getAttribute("name");
                    var id = locationNodes[i].getAttribute("id");
                    var contact = locationNodes[i].getAttribute("contact");
                    var address = locationNodes[i].getAttribute("address");
                    var distance = parseFloat(locationNodes[i].getAttribute("distance"));
                    var latlng = new google.maps.LatLng(
                    parseFloat(locationNodes[i].getAttribute("latitude")),
                    parseFloat(locationNodes[i].getAttribute("longitude")));

                    createOption(name, distance, id, i);
                    createMarker(latlng, name, id, contact, address);
                    bounds.extend(latlng);
                }
            map.fitBounds(bounds);
            locationSelect.style.visibility = "visible";
            locationSelect.onchange = function(){
                var markerNum = locationSelect.options[locationSelect.selectedIndex].value;
                google.maps.event.trigger(providers[markerNum], 'click');
            };
        }

        });
    }

    function createMarker(latlng, name, id, contact, address) {
        var html = "<b>" + "<a style='color: black !important' href=#"+ id + ">" + name + "</a>" + "</b> <br/>" + address;
        var marker = new google.maps.Marker({
            map: map,
            position: latlng
        });
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });
        providers.push(marker);
    }

    function createOption(name, distance, id, num) {
        var div = document.createElement("div");
        div.innerHTML = "<a style='color: black !important' href=#"+ id + ">" + "<p>" + name + "(" + distance.toFixed(1) + 'mi' + ")" + "</p>" + "</a>";
        locationSelect.appendChild(div);
    }

    function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;
        request.onreadystatechange = function() {
            if (request.readyState == 4){
                request.onreadystatechange = doNothing;
                callback(request.responseText, request.status);
            }
        };
        request.open('GET', url, true);
        request.send(null);
    }

    function parseXml(str) {
        if (window.ActiveXObject) {
            var doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.loadXML(str);
            return doc;
        } else if (window.DOMParser) {
            return (new DOMParser).parseFromString(str, 'text/xml');
        }
    }

    function doNothing(){}


    google.maps.event.addDomListener(window, 'load', load);
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });



