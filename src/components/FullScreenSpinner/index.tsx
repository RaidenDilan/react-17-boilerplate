import React, { useEffect, useState } from 'react';

import { Spinner } from '../Spinner';

import './FullScreenSpinner.scss';

export const FullScreenSpinner = () => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasLoaded(!hasLoaded);
  }, [hasLoaded]);

  return (
    <div data-testid="spinner" id="fullscreenSpinner" className={`FullScreenSpinner ${hasLoaded ? 'visible' : 'invisible'}`}>
      <div>
        <Spinner />
      </div>
    </div>
  );
};
