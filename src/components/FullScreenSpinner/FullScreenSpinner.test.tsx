import React from 'react';
import { render } from '@testing-library/react';

import { FullScreenSpinner } from '.';

describe(__filename, () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<FullScreenSpinner />);
    expect(queryByTestId('fullscreenSpinner')).toBeDefined();
  });
});
