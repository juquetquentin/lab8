function initMap() {
	// add your code here
  L.mapquest.key = 'Pekj266qzWhXSQsWDl31FdDfJIAPj2Jt';

  // 'map' refers to a <div> element with the ID map

  var map = L.mapquest.map('map', {
    center: [32.8788033,-117.2381008],
    layers: L.mapquest.tileLayer('map'),
    zoom: 14,
    zoomControl: false
  });
  L.marker([32.8788033,-117.2381008]).addTo(map);
}
