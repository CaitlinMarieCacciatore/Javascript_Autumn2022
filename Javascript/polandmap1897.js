let polandmap1897;
polandmap1897 = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(polandmap1897);

polandmap1897.setView([52.237049, 21.017532], 20);

const Warsaw = L.marker([52.237049, 21.017532]).addTo(polandmap1897);

Warsaw.bindPopup("<b>Warsaw: Capital of Poland</b>");

L.geoJSON(poland1897).addTo(polandmap1897);

