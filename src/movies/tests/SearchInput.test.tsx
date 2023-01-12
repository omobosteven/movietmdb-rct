import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SearchInput } from '../components/movies/SearchInput';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
  test('renders search input', async () => {
    const onChange = vi.fn();

    render(<SearchInput value="avatar" onChange={onChange} />);

    const searchBox = screen.getByPlaceholderText('Search for a movie');

    expect(searchBox).toBeInTheDocument();
    expect(searchBox).toHaveValue('avatar');

    await userEvent.type(searchBox, 'test');
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });
});
