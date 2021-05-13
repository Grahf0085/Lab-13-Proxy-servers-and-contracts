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
      time: weather.valid_date
    };
  });

}

export function formatReview(data) {

  return data.businesses.map(item => {
    return {
      name: item.name,
      image_url: item.image_url,
      price: item.price,
      rating: item.rating,
      url: item.url
    };
  });

}