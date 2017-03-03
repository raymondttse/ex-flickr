var exercise = {};

// Adds markers to the map and into array
exercise.addMarkers = function(data){

    data.photos.photo.forEach(function(photo){
        exercise.addMarker(photo);
    });

};

exercise.addMarker = function(photo){

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(photo.latitude,photo.longitude),
        icon: {
            path:google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 0.5,
            scale:7,
            strokeWeight:1
        },
        map: map,
        title: photo.title
    });
    markers.push(marker);
};


exercise.addPhotos = function(data){
    var html = exercise.buildHtmlForImages(data);          //This html variable needs to equal <img src="imageName.png" />'
    document.getElementById('images').innerHTML = html;
};



exercise.buildHtmlForImages = function(data){

    // ------------------------------------------------
    //   YOUR CODE
    //     use forEach to construct html to
    //     display every image in flickr data
    // ------------------------------------------------

    //Build a string that contains html <img> tags for all photos and return it to be displayed in div
    var images = "";
    
    data.photos.photo.forEach(function(photo){

        var image = '<img src="' + photo.url_s + '">';

        images += image;

    });

    return images;

};