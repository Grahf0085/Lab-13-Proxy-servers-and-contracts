export function formatGeo(data) {
  console.log(data);
  // return data.data.map(obj => {
  const obj = data[0];
  return {
    formatted_query: obj.display_name,
    latitude: obj.lat,
    longitude: obj.lon
  };
  // });
}