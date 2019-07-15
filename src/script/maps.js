import loadGoogleMapsApi from "load-google-maps-api";

const options = {
  key: "AIzaSyCbW4B0ULfuL-T6NYMigRP28oIlRga04aE"
};

loadGoogleMapsApi(options)
  .then(function(googleMaps) {
    initMap();
  })
  .catch(function(error) {
    console.error(error);
  });

const styles = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec"
      },
      {
        visibility: "on"
      }
    ]
  }
];

function initMap() {
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 6,
    center: new google.maps.LatLng(46.7776274, 18.4529541),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles
  });

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(44.7776274, 20.4529541),
    map: map
  });

  const marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(45.9989755, 14.5533585),
    map: map
  });
}
