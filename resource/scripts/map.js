function initMap() {
	var location = {lat: 51.987686, lng: 5.667192};
	var map = new google.maps.Map(document.getElementById("map"),{
	zoom: 14,
	center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}
