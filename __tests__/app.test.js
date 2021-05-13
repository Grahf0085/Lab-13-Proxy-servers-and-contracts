import geoData from '../data/geo';
import { formatGeo, formatWeather, formatReview } from '../lib/munge-utils';
import weatherData from '../data/weather';
import reviewData from '../data/yelp';

describe('API data mugging', () => {

  const expectedGeo =
  {
    formatted_query: 'Portland, Multnomah County, Oregon, USA',
    latitude: '45.5202471',
    longitude: '-122.6741949'
  };

  const expectWeather =
    [
      {
        forecast: 'Scattered clouds',
        time: '2020-05-05'
      },
      {
        forecast: 'Light snow',
        time: '2020-05-06'
      },
    ];

  const expectReview =
    [
      {
        name: 'Andina Restaurant',
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Ij9yv97Ch6NwKhNdpezRhw/o.jpg',
        price: '$$$',
        rating: 4.5,
        url: 'https://www.yelp.com/biz/andina-restaurant-portland?adjust_creative=D2ermI2XWiUpqusSd4z83Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D2ermI2XWiUpqusSd4z83Q'
      },
      {
        name: 'Lechon',
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/1sE02Y1glmOvdRA54VIlYA/o.jpg',
        price: '$$',
        rating: 4.5,
        url: 'https://www.yelp.com/biz/lechon-portland?adjust_creative=D2ermI2XWiUpqusSd4z83Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=D2ermI2XWiUpqusSd4z83Q',
      },
    ];

  it('mugs geo data', async () => {

    const output = formatGeo(geoData);

    expect(output).toEqual(expectedGeo);
  });

  it('mugs weather data', async () => {

    const output = formatWeather(weatherData);

    expect(output).toEqual(expectWeather);
  });

  it('mugs review data', async () => {

    const output = formatReview(reviewData);

    expect(output).toEqual(expectReview);
  });

});