import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('render of notificationItem', () => {

  it("notifcation exists", () => {
      const wrapper = shallow(<NotificationItem />)
      expect(wrapper.exists())
  });
  it("NotificationItem rendering by passing type and value props", () => {
		const props = {
			type: "default",
			value: "test",
			html: undefined
		}
		const wrapper = shallow(<NotificationItem {...props}/>);
		expect(wrapper.html()).equal(`<li data-priority="${props.type}">test</li>`);
    });
    
    it("NotificationItem rendering, by passing dummy html props", () => {
      const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
      expect(wrapper.html()).equal('<li><u>test</u></li>');
	});
})
