import React from 'react';
import { shallow } from 'enzyme';
import SimpleHeader from '.';

describe(__filename, () => {
  const rootClass = 'SimpleHeader';
  const wrapper = shallow(<SimpleHeader />);

  it('it should render with header tag as root', () => {
    expect(wrapper.first().type()).toEqual('header');
    expect(wrapper.first().type()).not.toEqual('div');
  });

  it('should have root component class', () => {
    expect(wrapper.hasClass(rootClass)).toBe(true);
    expect(wrapper.hasClass('non-existing-class')).toBe(false);
  });

  it('should have a brand logo image', () => {
    const logoEl = wrapper.find({ 'data-testid': 'brand-logo-img' });
    expect(logoEl.length).toBe(1);
  });
});
