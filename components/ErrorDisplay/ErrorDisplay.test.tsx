import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ErrorDisplay from './ErrorDisplay';

describe('components/ErrorDisplay', () => {
  it('should match the snapshot', () => {
    render(<ErrorDisplay errorText="test data" />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should contain the requested error text', async () => {
    const errorMessage = 'I am a test message';

    render(<ErrorDisplay errorText={errorMessage} />);

    const display = await screen.findByTestId('errorDisplay');

    expect(display).not.toBeNull();
    expect(display).toHaveTextContent(errorMessage);
  });
});
