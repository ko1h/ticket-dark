export const upDateLocation = (lat, long) => ({
  type: "UPDATE",
  lat,
  long
})

export function getCoordinates(city) {
    return function(dispatch) {
      return fetch('https://www.mapquestapi.com/geocoding/v1/address?key=jQJXPWHIDzs9AtiSjCTPCqWmxz64wLbe&location=' + city
).then(response => response.json(),
      error => console.log('an error occreed.', error)
    ).then(function(response) {
      console.log(response)
      const lat = response.results[0].locations[0].latLng.lat;
      const lng = response.results[0].locations[0].latLng.lng;
      console.log(lat,lng)
      dispatch(upDateLocation(lat,lng));
      getEarthquakeInfo(lat, lng);
    })
  }

}
