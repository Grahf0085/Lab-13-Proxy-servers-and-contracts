import geoData from '../data/geo';
import { formatGeo } from '../lib/munge-utils';

describe('API data mugging', () => {

  const expectedGeo = [
    {
      formatted_query: 'Portland, Multnomah County, Oregon, USA',
      latitude: '45.5202471',
      longitude: '-122.6741949'
    },
    {
      formatted_query: 'Portland, Cumberland County, Maine, USA',
      latitude: '43.6610277',
      longitude: '-70.2548596'
    },
    {
      formatted_query: 'Portland, San Patricio County, Texas, USA',
      latitude: '27.8768086',
      longitude: '-97.3233874'
    }
  ];

  it('mugs geo data', async () => {

    const output = formatGeo(geoData);

    expect(output).toEqual(expectedGeo);
  });

});