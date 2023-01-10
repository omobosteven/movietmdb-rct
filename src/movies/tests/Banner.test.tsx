import React from 'react';
import { render, screen } from '@testing-library/react';
import { Banner } from '../components/Banner';

describe('<Banner />', () => {
  test('renders title and subtitle correctly', () => {
    render(<Banner />);

    const title = screen.getByRole('heading', { name: /movies db/i });
    const subTitle = screen.getByRole('heading', {
      name: /movies database/i,
    });

    expect(title).toHaveTextContent('Movies DB');
    expect(subTitle).toHaveTextContent('Movies database');
  });
});
