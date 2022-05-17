import { MutableRefObject, useRef, useEffect } from 'react';

const useDocumentTitle = (
  title: string,
  prevailOnUnmount = false,
) => {
  const defaultTitle: MutableRefObject<string> = useRef<string>(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [prevailOnUnmount]);

  return {
    title: document.title,
  };
};

export default useDocumentTitle;
