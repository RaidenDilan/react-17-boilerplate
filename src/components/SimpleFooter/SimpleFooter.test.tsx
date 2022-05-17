import React from 'react';
import { shallow } from 'enzyme';
import SimpleFooter from '.';

describe(__filename, () => {
  const rootClass = 'SimpleFooter';
  const wrapper = shallow(<SimpleFooter />);

  it('it should render with footer tag as root', () => {
    expect(wrapper.first().type()).toEqual('footer');
    expect(wrapper.first().type()).not.toEqual('div');
  });

  it('should have root component class', () => {
    expect(wrapper.hasClass(rootClass)).toBe(true);
    expect(wrapper.hasClass('non-existing-class')).toBe(false);
  });

  it('should have brand logo image', () => {
    const logoEl = wrapper.find({ 'data-testid': 'brand-logo-img' });
    expect(logoEl.length).toBeGreaterThan(0);
  });
});
