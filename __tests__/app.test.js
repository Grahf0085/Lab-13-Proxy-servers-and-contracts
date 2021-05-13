import geoData from '../data/geo';
import { formatGeo, formatWeather, formatReview } from '../lib/munge-utils';
import weatherData from '../data/weather';

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

    ];

  it('mugs geo data', async () => {

    const output = formatGeo(geoData);

    expect(output).toEqual(expectedGeo);
  });

  it('mugs weather data', async () => {

    const output = formatWeather(weatherData);

    expect(output).toEqual(expectWeather);
  });

  it('mugs review data'), async () => {

    const output = formatReview(reviewData);

    expect(output).toEqual(expectReview);
  };

});