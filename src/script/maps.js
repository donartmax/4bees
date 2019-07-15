const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCbW4B0ULfuL-T6NYMigRP28oIlRga04aE'
  });

  console.log(googleMapsClient);

const map = googleMapsClient.maps.Map(document.querySelector('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  console.log('CONTACT')