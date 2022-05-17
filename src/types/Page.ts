export enum Page {
  main = '/',
  movies = '/movies',
}

export const pageMapping: Record<Page, string> = {
  [Page.main]: 'Main',
  [Page.movies]: 'Movies',
};

export const PAGES: Page[] = Object.values(Page);