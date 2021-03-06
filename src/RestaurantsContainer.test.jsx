import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '새마을 식당' },
      ],
      categoryId: 1,
      selectedRegion: {
        regionName: '서울',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);

    jest.clearAllMocks();
  });

  context('when loaded', () => {
    it('calls load restaurants dispatch', () => {
      const { container } = render(<RestaurantsContainer />);

      expect(container).toHaveTextContent('새마을 식당');

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
