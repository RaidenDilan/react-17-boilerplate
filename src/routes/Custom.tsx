import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router';

import { pageMapping } from '../types/Page';
import useDocumentTitle from '../hooks/useDocumentTitle';

interface ICustomProps extends RouteProps {
  exact?: boolean;
  path: string;
  component: ComponentType<any>;
  isAuthenticated?: boolean;
  authenticationPath?: string;
}

const CustomRoute = ({ exact, path, component: Component, ...rest }: ICustomProps) => {
  const title = useDocumentTitle(pageMapping[path]);
  return (
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
  CustomRoute
};
