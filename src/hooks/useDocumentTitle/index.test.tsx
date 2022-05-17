import React, { FC } from 'react';
import { cleanup, render } from '@testing-library/react';
import { pageMapping, PAGES } from '../../types/Page';
import useDocumentTitle from '.';

const originalDocumentTitle = document.title;

afterEach(() => {
  document.title = originalDocumentTitle;
  cleanup();
});

it('should set the document title for a given page', () => {
  PAGES.forEach(page => {
    const newTitle = pageMapping[page];
    const Component: FC<{ title: string }> = ({ title }) => {
      useDocumentTitle(title);
      return <div />;
    };
    render(<Component title={ newTitle } />);
    expect(document.title).toBe(newTitle);
  });
});
