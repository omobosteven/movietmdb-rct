import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchInput } from '../components/SearchInput';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
  test('renders search input', async () => {
    const onChange = vi.fn();

    render(<SearchInput value="avatar" onChange={onChange} />);

    const searchBox = screen.getByPlaceholderText('Search for a movie');

    expect(searchBox).toBeInTheDocument();
    expect(searchBox).toHaveValue('avatar');

    await userEvent.type(searchBox, 'test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});