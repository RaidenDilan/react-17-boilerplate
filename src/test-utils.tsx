import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};
const AllTheProviders = ({ children }: Props) => {
  return (<BrowserRouter>{children}</BrowserRouter>);
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  storeOptions?: Record<string, string>,
) => render(ui);

export * from '@testing-library/react';
export { customRender as render };
