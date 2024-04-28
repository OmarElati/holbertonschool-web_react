import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Test that Notifications renders without crashing
describe('Notifications', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });
});

// Test that Notifications renders three list items
describe('Notifications List', () => {
  it('should render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });
});

// Test that Notifications renders the text 'Here is the list of notifications'
describe('Notifications Text', () => {
  it('should render the correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
