const map = L.map("map", {
  center: [-8.4056618, 116.0674516],
  zoom: 12,
});

const masjidIcon = L.icon({ iconUrl: "icons/mosque.png", iconSize: [30, 30] });
const pelabuhanIcon = L.icon({
  iconUrl: "icons/anchor.png",
  iconSize: [30, 30],
});
const divingIcon = L.icon({ iconUrl: "icons/diving.png", iconSize: [30, 30] });
const hillIcon = L.icon({ iconUrl: "icons/hill.png", iconSize: [30, 30] });
const spbuIcon = L.icon({ iconUrl: "icons/spbu.png", iconSize: [30, 30] });
const puraIcon = L.icon({ iconUrl: "icons/pura.png", iconSize: [30, 30] });
const beachIcon = L.icon({ iconUrl: "icons/beach.png", iconSize: [30, 30] });
const wisatalainIcon = L.icon({
  iconUrl: "icons/wisatalain.png",
  iconSize: [30, 30],
});
const ekowisataIcon = L.icon({
  iconUrl: "icons/jungle.png",
  iconSize: [30, 30],
});
const waterfallIcon = L.icon({
  iconUrl: "icons/waterfall.png",
  iconSize: [30, 30],
});
const hotelIcon = L.icon({ iconUrl: "icons/hotel.png", iconSize: [30, 30] });
const viharaIcon = L.icon({ iconUrl: "icons/vihara.png", iconSize: [30, 30] });

// MOSQUE
const masjid = L.layerGroup([
  L.marker([-8.349617, 116.043601], { icon: masjidIcon }).bindPopup(
    "Masjid Agung Baiturrahman Gili Trawangan"
  ),
  L.marker([-8.351996, 116.05639], { icon: masjidIcon }).bindPopup(
    "Masjid Gili Meno"
  ),
  L.marker([-8.360324, 116.082564], { icon: masjidIcon }).bindPopup(
    "Masjid Gili Air"
  ),
  L.marker([-8.404344, 116.102492], { icon: masjidIcon }).bindPopup(
    "Masjid Jami Nurul Hikmah "
  ),
  L.marker([-8.406129, 116.065313], { icon: masjidIcon }).bindPopup(
    "Masjid Mentigi"
  ),
  L.marker([-8.431708, 116.050144], { icon: masjidIcon }).bindPopup(
    "Masjid Nipah"
  ),
  L.marker([-8.452231, 116.040626], { icon: masjidIcon }).bindPopup(
    "Masjid Nurul Iman"
  ),
]);

// PURA
const pura = L.layerGroup([
  L.marker([-8.402857, 116.093272], { icon: puraIcon }).bindPopup(
    "Pura Dalem Pemenang"
  ),
  L.marker([-8.404047, 116.103087], { icon: puraIcon }).bindPopup(
    "Pura Desa Pemenang"
  ),
  L.marker([-8.463533, 116.083754], { icon: puraIcon }).bindPopup(
    "Pura Manik Sari Batu Beleq"
  ),
]);

// VIHARA
const vihara = L.marker([-8.408806, 116.105467], {
  icon: viharaIcon,
}).bindPopup("Vihara Satta Bojjhanga");

// PELABUHAN
const pelabuhan = L.layerGroup([
  L.marker([-8.352888, 116.043303], { icon: pelabuhanIcon }).bindPopup(
    "Pelabuhan Gili Trawangan"
  ),
  L.marker([-8.353483, 116.062339], { icon: pelabuhanIcon }).bindPopup(
    "Gili Meno Terminal Ferry"
  ),
  L.marker([-8.363893, 116.082862], { icon: pelabuhanIcon }).bindPopup(
    "Pelabuhan Gili Air"
  ),
  L.marker([-8.393934, 116.099221], { icon: pelabuhanIcon }).bindPopup(
    "Pelabuhan Bangsal"
  ),
  L.marker([-8.406129, 116.073939], { icon: pelabuhanIcon }).bindPopup(
    "Pelabuhan Teluk Nare"
  ),
]);

// SPBU
const spbu = L.layerGroup([
  L.marker([-8.397206, 116.106954], { icon: spbuIcon }).bindPopup("SPBU"),
  L.marker([-8.412077, 116.099221], { icon: spbuIcon }).bindPopup("SPBU"),
]);

// DIVING
const diving = L.layerGroup([
  L.marker([-8.34575, 116.023078], { icon: divingIcon }).bindPopup(
    "Shark Point Dive 2"
  ),
  L.marker([-8.356458, 116.029026], { icon: divingIcon }).bindPopup(
    "Shark Point Dive 1"
  ),
  L.marker([-8.347535, 116.050144], { icon: divingIcon }).bindPopup(
    "Gili Meno Bask Nest"
  ),
  L.marker([-8.340099, 116.061149], { icon: divingIcon }).bindPopup(
    "Turtle Heaven"
  ),
  L.marker([-8.349022, 116.085241], { icon: divingIcon }).bindPopup(
    "Secret Garden Dive Spot"
  ),
  L.marker([-8.363596, 116.084051], { icon: divingIcon }).bindPopup(
    "DPM Diving Gili Air"
  ),
  L.marker([-8.360027, 116.087323], { icon: divingIcon }).bindPopup("3W Dive"),
  L.marker([-8.353483, 116.086431], { icon: divingIcon }).bindPopup(
    "Blue Marine Dive"
  ),
  L.marker([-8.434087, 116.038842], { icon: divingIcon }).bindPopup(
    "Turtle Dive Nipah"
  ),
]);
// HILL
const hill = L.layerGroup([
  L.marker([-8.42338, 116.04479], { icon: hillIcon }).bindPopup("Bukit Nipah"),
  L.marker([-8.405534, 116.082564], { icon: hillIcon }).bindPopup(
    "Bukit Sumbur Suma"
  ),
  L.marker([-8.461154, 116.064718], { icon: hillIcon }).bindPopup(
    "Bukit Sinjong Beto"
  ),
  L.marker([-8.441034, 116.0324901], { icon: hillIcon }).bindPopup(
    "Bukit Malimbu"
  ),
  L.marker([-8.429626, 116.077805], { icon: hillIcon }).bindPopup(
    "Bukit Melka"
  ),
  L.marker([-8.425759, 116.079887], { icon: hillIcon }).bindPopup(
    "Bukit Bagek Momot"
  ),
  L.marker([-8.435872, 116.104574], { icon: hillIcon }).bindPopup(
    "Bukit Shaolin"
  ),
]);

// BEACH
const beach = L.layerGroup([
  L.marker([-8.346047, 116.028432], { icon: beachIcon }).bindPopup(
    "Sunset Point Agung"
  ),
  L.marker([-8.351996, 116.087026], { icon: beachIcon }).bindPopup(
    "Sunset Point Rinjani"
  ),
  L.marker([-8.359432, 116.039734], { icon: beachIcon }).bindPopup(
    "Pantai Gili Trawangan"
  ),
  L.marker([-8.357647, 116.060852], { icon: beachIcon }).bindPopup(
    "Gili Meno South-East Beach"
  ),
  L.marker([-8.38977, 116.104277], { icon: beachIcon }).bindPopup(
    "Pantai Muara Putat"
  ),
  L.marker([-8.393934, 116.098923], { icon: beachIcon }).bindPopup(
    "Pantai Bangsal"
  ),
  L.marker([-8.402857, 116.079887], { icon: beachIcon }).bindPopup(
    "Pantai Teluk Kodek"
  ),
  L.marker([-8.403155, 116.067098], { icon: beachIcon }).bindPopup(
    "Pantai Mentigi"
  ),
  L.marker([-8.405831, 116.060257], { icon: beachIcon }).bindPopup(
    "Pantai Kecinan"
  ),
  L.marker([-8.409103, 116.053713], { icon: beachIcon }).bindPopup(
    "Pantai Teluk Borok"
  ),
  L.marker([-8.419811, 116.049847], { icon: beachIcon }).bindPopup(
    "Pantai Pandanan"
  ),
  L.marker([-8.43379, 116.04479], { icon: beachIcon }).bindPopup(
    "Pantai Nipah"
  ),
  L.marker([-8.441226, 116.038247], { icon: beachIcon }).bindPopup(
    "Pantai Malimbu"
  ),
  L.marker([-8.449554, 116.033488], { icon: beachIcon }).bindPopup(
    "Pantai Setangi"
  ),
  L.marker([-8.465615, 116.037057], { icon: beachIcon }).bindPopup(
    "Pantai Klui"
  ),
]);

// WISATA LAIN
const wisatalain = L.layerGroup([
  L.marker([-8.400478, 116.087026], { icon: wisatalainIcon }).bindPopup(
    "Hunting Klite"
  ),
  L.marker([-8.406426, 116.103385], { icon: wisatalainIcon }).bindPopup(
    "Pasar Tradisional Pemenang"
  ),
]);

// EKOWISATA
const ekowisata = L.marker([-8.442713, 116.097138], {
  icon: ekowisataIcon,
}).bindPopup("Ekowisata Krujuk");

// WATERFALL
const waterfall = L.marker([-8.421, 116.123313], {
  icon: waterfallIcon,
}).bindPopup("Wisata Alam Tiu Roton (Air Terjun)");

// HOTEL
const penginapan = L.layerGroup([
  L.marker([-8.400775, 116.1016], { icon: hotelIcon }).bindPopup(
    "Arnel Bungalows"
  ),
  L.marker([-8.347237, 116.028134], { icon: hotelIcon }).bindPopup(
    "Aston Sunset Beach Resort"
  ),
  L.marker([-8.340396, 116.03438], { icon: hotelIcon }).bindPopup(
    "Kuno Villas"
  ),
  L.marker([-8.359729, 116.036462], { icon: hotelIcon }).bindPopup(
    "Pondok Santi Estate Luxury Beachside Accommodation"
  ),
  L.marker([-8.358242, 116.041519], { icon: hotelIcon }).bindPopup(
    "Villa Ombak Harbour"
  ),
  L.marker([-8.343073, 116.053713], { icon: hotelIcon }).bindPopup(
    "Meno House"
  ),
  L.marker([-8.352888, 116.055498], { icon: hotelIcon }).bindPopup(
    "Kampung Meno Bungalows"
  ),
  L.marker([-8.432707, 116.090298], { icon: hotelIcon }).bindPopup(
    "De Chicktoria Hostel"
  ),
  L.marker([-8.416069, 116.108941], { icon: hotelIcon }).bindPopup(
    "Villa Pintu Bintang"
  ),
  L.marker([-8.41054, 116.096994], { icon: hotelIcon }).bindPopup(
    "Koo Sasak Villa"
  ),
  L.marker([-8.410968, 116.097351], { icon: hotelIcon }).bindPopup(
    "Khoo Villa"
  ),
  L.marker([-8.4049, 116.068583], { icon: hotelIcon }).bindPopup(
    "Monti Dome Villas Lombok"
  ),
  L.marker([-8.404139, 116.067061], { icon: hotelIcon }).bindPopup(
    "Makalele Dome"
  ),
  L.marker([-8.41023, 116.053545], { icon: hotelIcon }).bindPopup(
    "Le Gusto Restaurant by BAIO Lombok"
  ),
  L.marker([-8.4365, 116.044979], { icon: hotelIcon }).bindPopup(
    "Nipah Pool Villas & Restaurnt"
  ),
  L.marker([-8.437642, 116.03984], { icon: hotelIcon }).bindPopup(
    "Amarsvati Luxury Resort Hotel"
  ),
  L.marker([-8.446208, 116.032606], { icon: hotelIcon }).bindPopup(
    "Royal Avila Boutique Resort & Spa"
  ),
  L.marker([-8.45801, 116.038507], { icon: hotelIcon }).bindPopup(
    "Living Asia Resort"
  ),
  L.marker([-8.458962, 116.038317], { icon: hotelIcon }).bindPopup(
    "Pesona Bulan Baru Hotel"
  ),
  L.marker([-8.468099, 116.038126], { icon: hotelIcon }).bindPopup(
    "Jeeva Klui Resort Lombok"
  ),
]);

const wisata = L.layerGroup([
  diving,
  hill,
  beach,
  wisatalain,
  ekowisata,
  waterfall,
]);

// const menggala = L.marker([-8.445132, 116.094259]).bindPopup("Menggala"),
//   malaka = L.marker([-8.435373, 116.057675]).bindPopup("Malaka"),
//   pemenangtimur = L.marker([-8.41272, 116.112878]).bindPopup("Pemenang Timur"),
//   giliindah = L.marker([-8.349792, 116.057216]).bindPopup("Gili Indah"),
//   pemenangbarat = L.marker([-8.40739, 116.092891]).bindPopup("Pemenang Barat");

// const pemenang = L.layerGroup([
//   menggala,
//   malaka,
//   pemenangtimur,
//   giliindah,
//   pemenangbarat,
// ]);

const peribadatan = L.layerGroup([masjid, pura, vihara]);

const pemenang = L.geoJSON(pemenanggeojson, {
  style: function (feature) {
    switch (feature.properties.Desa_Name) {
      case "MENGGALA":
        return { color: "#ff9900" };
      case "MALAKA":
        return { color: "red" };
      case "PEMENANG BARAT":
        return { color: "blue" };
      case "PEMENANG TIMUR":
        return { color: "green" };
      case "GILI INDAH":
        return { color: "magenta" };
    }
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "Desa " + "<strong>" + feature.properties.Desa_Name + "</strong>"
    );
  },
}).addTo(map);

// const esri = L.tileLayer(
//   "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//   {
//     attribution:
//       "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
//   }
// )

const carto = L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: "abcd",
    maxZoom: 17,
  }
);

const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    attribution: 'Maps by <a href="https://maps.google.com">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    attribution: 'Maps by <a href="https://maps.google.com">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

const googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    attribution: 'Maps by <a href="https://maps.google.com">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
  attribution: 'Maps by <a href="https://maps.google.com">Google Maps</a>',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

const baseMaps = {
  // "Citra Satelit": esri,
  "Peta Carto": carto,
  "Google Streets": googleStreets,
  "Google Hybrid": googleHybrid,
  "Google Satelite": googleSat,
  "Google Terrain": googleTerrain
};

const overlayMaps = {
  "Kecamatan Pemenang": pemenang,
  Pelabuhan: pelabuhan,
  "Penginapan/Hotel/Resto": penginapan,
  Peribadatan: peribadatan,
  SPBU: spbu,
  Wisata: wisata,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

L.Control.geocoder().addTo(map);

// L.easyPrint({
//   title: "My awesome print button",
//   position: "topright",
//   sizeModes: ["A4Portrait", "A4Landscape"],
// }).addTo(map);

const graphicScale = L.control
  .graphicScale({
    fill: "fill",
    doubleLine: "true",
    showSubunits: "true",
  })
  .addTo(map);

function cari() {
  map.locate({ setView: true, maxZoom: 16 });

  function onLocationFound(e) {
    const radius = e.accuracy / 2;

    L.marker(e.latlng)
      .addTo(map)
      .bindPopup("You are within " + radius + " meters from this point")
      .openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on("locationfound", onLocationFound);
}

// function markerOnClick(e) {
//   alert("hi. you clicked the marker at " + e.latlng);
// }
