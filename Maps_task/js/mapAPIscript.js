

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: {lat: -34.397, lng: 150.644}
	});
	var geocoder = new google.maps.Geocoder();

	document.getElementById('submit').addEventListener('click', function() {
	  geocodeAddress(geocoder, map);
	});
	}

	function geocodeAddress(geocoder, resultsMap) {
	var address = document.getElementById('address').value;
	geocoder.geocode({'address': address}, function(results, status) {
	  if (status === 'OK') {
	    resultsMap.setCenter(results[0].geometry.location);
	    var marker = new google.maps.Marker({
	      map: resultsMap,
	      position: results[0].geometry.location
	    });
	  } else {
	    alert('Geocode was not successful for the following reason: ' + status);
	  }
	});
	}

	google.maps.event.addListener(map, 'click', function(event) {
		alert("FSSSD");
	  geocoder.geocode({
	    'latLng': event.latLng
	  }, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      if (results[0]) {
	      	document.getElementById('address').value = results[0].formatted_address;
	        alert(results[0].formatted_address);
	      }
	    }
	  });
	});




// $(document).ready(function(){
    
//     $("#submit").click(function(){
//              $("map").show();
//     });
// });

// $(document).ready(function(){
//     $("#submit").click(function(){
//         $("map").toggle();
//     });
// });