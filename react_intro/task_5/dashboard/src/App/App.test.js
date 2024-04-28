import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test that App renders without crashing
describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

// Test that App renders a div with the class App-header
describe('App Header', () => {
  it('should render a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });
});

// Test that App renders a div with the class App-body
describe('App Body', () => {
  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });
});

// Test that App renders a div with the class App-footer
describe('App Footer', () => {
  it('should render a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});
