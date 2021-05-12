export function formatGeo(data) {

  return data.map(obj => {

    return {
      formatted_query: obj.display_name,
      latitude: obj.lat,
      longitude: obj.lon
    };
  });
}