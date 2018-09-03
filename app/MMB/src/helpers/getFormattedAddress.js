// @flow

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

export default async function getAddress(
  coordinate: ?Coordinate,
  googleMapsAPIKey: string,
) {
  if (coordinate != null) {
    const { latitude, longitude } = coordinate;
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKey}`,
    );
    const json = await res.json();
    const address = await json.results[0].address_components;

    const city = (address.find(x => x.types.includes('locality')) || {})
      .long_name;
    const route = (address.find(x => x.types.includes('route')) || {})
      .long_name;
    const streetNumber = (
      address.find(x => x.types.includes('street_number')) || {}
    ).long_name;

    const area = (
      address.find(x => x.types.includes('administrative_area_level_1')) || {}
    ).long_name;

    const streetAddress =
      route !== undefined && streetNumber !== undefined
        ? route.concat(' ', streetNumber)
        : route;

    const formattedAddress = [city, streetAddress, area]
      .filter(item => item !== undefined)
      .join(', ');

    return formattedAddress;
  }
  return '';
}
