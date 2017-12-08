// @flow
import hotel from '../fakeHotel';
import withFakeData from '../withFakeData';
import Description from './Description';

export type DescriptionContainer_hotel = {
  description: string,
  facilities: {
    edges: Array<{
      node: {
        name: string,
      },
    }>,
  },
};

export default withFakeData(Description, () => ({
  hotel,
}));
