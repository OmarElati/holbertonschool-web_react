import { shallow, mount } from '../../config/setupTests';
import React from 'react';
import App from './App';
import Login from '../Login/Login';

describe('<App />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Tests that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Contains Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toBe(1);
    });

    it('Contains Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBe(true);
    });

    it('Contains Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toBe(1);
    });

    it('Tests that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList').length).toBe(0);
    });

    it('Verifies that the logOut function is called when ctrl-h is pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        const wrapper = mount(<App isLoggedIn logOut={logOutMock} />);
        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });

        window.dispatchEvent(event);

        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();

        wrapper.unmount();
    });
});
