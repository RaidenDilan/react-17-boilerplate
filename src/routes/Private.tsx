import React, { ComponentType, ReactNode, ReactElement, useEffect, useState } from 'react';
import { Route } from 'react-router';

import { pageMapping } from '../types/Page';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { FullScreenSpinner } from '../components/FullScreenSpinner';

type AuthProps = {
  exact?: boolean;
  path: string;
  render: (value: any) => ReactNode;
};

const PrivateRouteOld = ({ exact, render, path }: AuthProps): ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading
    ? <FullScreenSpinner />
    : <Route exact={exact} path={path} render={render} />;
};

interface IAuthProps {
  path: string;
  exact?: boolean;
  component: ComponentType<any>;
}

const PrivateRoute = ({ path, exact, component: Component, ...rest }: IAuthProps) => {
  const [loading, setLoading] = useState(true);
  const title = useDocumentTitle(pageMapping[path]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading
    ? <FullScreenSpinner />
    : (
      <Route
        path={ path }
        exact={ exact }
        render={ props => (
          <Component
            title={ title }
            { ...props } />
        ) }
        { ...rest } />
    );
};

export {
  PrivateRoute,
  PrivateRouteOld,
};
