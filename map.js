let worldMap;
worldMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(worldMap);

worldMap.setView([49.842957, 24.031111], 7);

const Paris = L.marker([48.864716, 2.349014]).addTo(worldMap);
const Berlin = L.marker([52.520008, 13.404954]).addTo(worldMap);
const Lviv = L.marker([49.842957, 24.031111]).addTo(worldMap);
const Warsaw = L.marker([52.237049, 21.017532]).addTo(worldMap);
const Kraków = L.marker([50.049683, 19.944544]).addTo(worldMap);
const LA = L.marker([34.052235, -118.243683]).addTo(worldMap);

Lviv.bindPopup("<b>Herbert was born in the then-Polish city of Lwów, which is now the Ukrainian city of Lviv. He was forced to leave after the 1939 invasion of Poland. The Siege of Lwów lasted just five days in September of that year, according to the Lviv Center for Urban History, after which the city fell to the combined forces of the Wehrmacht and the Red Army and became part of the Soviet Union.</b>");
Paris.bindPopup("<b>Herbert occasionally lived in Paris during the time spanning 1965-1971.</b>");
Berlin.bindPopup("<b>Herbert also lived in West Berlin for a time during the years 1965-1971, returning in 1973 before making Poland his permanent home in 1981.</b>");
Warsaw.bindPopup("<b>Herbert died in Warsaw on July 28, 1998 at the age of 73.</b>");
Kraków.bindPopup("<b>Herbert studied at the Fine Arts Academy in Kraków.</b>")
LA.bindPopup("<b>Herbert briefly taught at the University of California in Los Angeles during the academic year of 1968-1969.</b>")

poemMap.panTo(Lviv.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});