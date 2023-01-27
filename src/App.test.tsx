import React from 'react';
import {
  render,
  renderWithRoute,
  screen,
} from './test-utils/testing-library-utils';
import { App } from './App';
import userEvent from '@testing-library/user-event';

describe('<App />', () => {
  test('should render APP correctly', () => {
    render(<App />);
    const loadingElement = screen.getByRole('progressbar');

    expect(loadingElement).toBeInTheDocument();
  });

  test('should show error page if user navigates to a wrong route', async () => {
    renderWithRoute({ route: '/unknown' });

    const ErrorText = screen.getByText('Page Not Found');
    const actionLink: HTMLAnchorElement = screen.getByRole('link', {
      name: /go home/i,
    });

    expect(ErrorText).toBeInTheDocument();
    expect(actionLink).toBeInTheDocument();
    expect(actionLink.href).toContain('/');

    await userEvent.click(actionLink);
    expect(window.location.href).toContain('http://localhost');
  });
});
