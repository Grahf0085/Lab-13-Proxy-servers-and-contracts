export function formatGeo(data) {

  const obj = data[0];

  return {
    formatted_query: obj.display_name,
    latitude: obj.lat,
    longitude: obj.lon
  };

}

export function formatWeather(data) {

  return data.data.map(weather => {
    return {
      forecast: weather.weather.description,
      time: weather.datetime,
    };
  });

}

export function formatReview(data) {

}