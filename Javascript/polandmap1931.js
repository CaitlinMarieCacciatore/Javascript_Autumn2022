let polandmap1931;
polandmap1931 = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(polandmap1931);

polandmap1931.setView([52.237049, 21.017532], 20);

const Warsaw = L.marker([52.237049, 21.017532]).addTo(polandmap1931);

Warsaw.bindPopup("<b>Warsaw: Capital of Poland</b>");

L.geoJSON(poland1931).addTo(polandmap1931);


L.geoJSON(poland1931, {
    style: () => ({
        color: "blue",
        fillColor: "yellow",
        fillOpacity: 0.5
    })
}).addTo(polandmap1931);


var corner1 = L.latLng(15.335378, 56.081117),
corner2 = L.latLng(28.599944, 47.54695),
bounds = L.latLngBounds(corner1, corner2);