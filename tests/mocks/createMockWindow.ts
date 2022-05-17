export function createMockWindow() {
  delete (window as { location?: Location }).location;
  window.location = {
    href: 'http://localhost/',
    origin: 'http://localhost',
    pathname: '/',
    replace: jest.fn().mockImplementation(url => window.location.href = url),
    reload: jest.fn().mockImplementation(() => console.log('Reload called')),
    search: '',
  } as unknown as Location;

  window.scrollTo = () => console.log('scrollTo called');
}
