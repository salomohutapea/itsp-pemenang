var map = L.map("map", {
  center: [-8.4056618, 116.0674516],
  zoom: 12,
});

var esri = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
).addTo(map);

var carto = L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: "abcd",
    maxZoom: 17,
  }
);

var masjidIcon = L.icon({
  iconUrl: "icons/mosque.png",
  iconSize: [30, 30]
});

var pelabuhanIcon = L.icon({
  iconUrl: "icons/anchor.png",
  iconSize: [30, 30]
});

var divingIcon = L.icon({
  iconUrl: "icons/diving.png",
  iconSize: [30, 30]
});

var hillIcon = L.icon({
  iconUrl: "icons/hill.png",
  iconSize: [30, 30]
});

// WISATA
for (var wisata of wisatageojson.features) {
  L.marker(wisata.geometry.coordinates.reverse(), { icon: hillIcon })
    .bindPopup(
      "<div>\
      <img style=\"max-width: 100%;\" src=\"images/test-img.png\">\
      </div>" + "<strong>" + wisata.properties.Name + "</strong>"
    )
    .addTo(map);
}

// MASJID
for (var masjid of masjidgeojson.features) {
  L.marker(masjid.geometry.coordinates.reverse(), { icon: masjidIcon })
    .bindPopup(
      "<div>\
      <img style=\"max-width: 100%;\" src=\"images/test-img.png\">\
      </div>" + "<strong>" + masjid.properties.Name + "</strong>"
    )
    .addTo(map);
}

// HOTEL RESTO
for (var hotelresto of hotelrestogeojson.features) {
  L.marker(hotelresto.geometry.coordinates.reverse())
    .bindPopup(
      "<div>\
      <img style=\"max-width: 100%;\" src=\"images/test-img.png\">\
      </div>" + "<strong>" + hotelresto.properties.Name + "</strong>"
    )
    .addTo(map);
}

// MASJID
// L.marker([-8.349617, 116.043601], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Agung Baiturrahman Gili Trawangan")
//   .addTo(map);
// L.marker([-8.351996, 116.05639], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Gili Meno")
//   .addTo(map);
// L.marker([-8.360324, 116.082564], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Gili Air")
//   .addTo(map);
// L.marker([-8.404344, 116.102492], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Jami Nurul Hikmah ")
//   .addTo(map);
// L.marker([-8.406129, 116.065313], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Mentigi")
//   .addTo(map);
// L.marker([-8.431708, 116.050144], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Nipah")
//   .addTo(map);
// L.marker([-8.452231, 116.040626], { icon: masjidIcon })
//   .on("click", markerOnClick)
//   .bindPopup("Masjid Nurul Iman")
//   .addTo(map);

// PELABUHAN
L.marker([-8.352888, 116.043303], { icon: pelabuhanIcon })
  .bindPopup("Pelabuhan Gili Trawangan")
  .addTo(map);
L.marker([-8.353483, 116.062339], { icon: pelabuhanIcon })
  .bindPopup("Gili Meno Terminal Ferry")
  .addTo(map);
L.marker([-8.363893, 116.082862], { icon: pelabuhanIcon })
  .bindPopup("Pelabuhan Gili Air")
  .addTo(map);
L.marker([-8.393934, 116.099221], { icon: pelabuhanIcon })
  .bindPopup("Pelabuhan Bangsal")
  .addTo(map);
L.marker([-8.406129, 116.073939], { icon: pelabuhanIcon })
  .bindPopup("Pelabuhan Teluk Nare")
  .addTo(map);

// DIVING
L.marker([-8.34575, 116.023078], { icon: divingIcon })
  .bindPopup("Shark Point Dive 2")
  .addTo(map);
L.marker([-8.356458, 116.029026], { icon: divingIcon })
  .bindPopup("Shark Point Dive 1")
  .addTo(map);
L.marker([-8.347535, 116.050144], { icon: divingIcon })
  .bindPopup("Gili Meno Bask Nest")
  .addTo(map);
L.marker([-8.340099, 116.061149], { icon: divingIcon })
  .bindPopup("Turtle Heaven")
  .addTo(map);
L.marker([-8.349022, 116.085241], { icon: divingIcon })
  .bindPopup("Secret Garden Dive Spot")
  .addTo(map);

// HILL
// L.marker([-8.42338, 116.04479], { icon: hillIcon })
//   .bindPopup("Bukit Nipah")
//   .addTo(map);
// L.marker([-8.405534, 116.082564], { icon: hillIcon })
//   .bindPopup("Bukit Sumbur Suma")
//   .addTo(map);
// L.marker([-8.461154, 116.064718], { icon: hillIcon })
//   .bindPopup("Bukit Sinjong Beto")
//   .addTo(map);
// L.marker([-8.441034, 116.0324901], { icon: hillIcon })
//   .bindPopup("Bukit Malimbu")
//   .addTo(map);
// L.marker([-8.429626, 116.077805], { icon: hillIcon })
//   .bindPopup("Bukit Melka")
//   .addTo(map);
// L.marker([-8.425759, 116.079887], { icon: hillIcon })
//   .bindPopup("Bukit Bagek Momot")
//   .addTo(map);
// L.marker([-8.435872, 116.104574], { icon: hillIcon })
//   .bindPopup("Bukit Shaolin")
//   .addTo(map);

var menggala = L.marker([-8.445132, 116.094259]).bindPopup("Menggala"),
  malaka = L.marker([-8.435373, 116.057675]).bindPopup("Malaka"),
  pemenangtimur = L.marker([-8.41272, 116.112878]).bindPopup("Pemenang Timur"),
  giliindah = L.marker([-8.349792, 116.057216]).bindPopup("Gili Indah"),
  pemenangbarat = L.marker([-8.40739, 116.092891]).bindPopup("Pemenang Barat");

var pemenang = L.layerGroup([
  menggala,
  malaka,
  pemenangtimur,
  giliindah,
  pemenangbarat,
]);

var baseMaps = {
  "Citra Satelit": esri,
  "Peta Carto": carto,
};

var overlayMaps = {
  Pemenang: pemenang,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

L.Control.geocoder().addTo(map);

L.easyPrint({
  title: "My awesome print button",
  position: "topright",
  sizeModes: ["A4Portrait", "A4Landscape"],
}).addTo(map);

var graphicScale = L.control
  .graphicScale({
    fill: "fill",
    doubleLine: "true",
    showSubunits: "true",
  })
  .addTo(map);

function cari() {
  alert("tombol ditekan!");
  map.locate({ setView: true, maxZoom: 16 });

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng)
      .addTo(map)
      .bindPopup("You are within " + radius + " meters from this point")
      .openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on("locationfound", onLocationFound);
}

function markerOnClick(e) {
  alert("hi. you clicked the marker at " + e.latlng);
}

L.geoJSON(pemenanggeojson, {
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
