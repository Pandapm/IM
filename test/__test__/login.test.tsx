import * as React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/login/index';

const component = () => {
    const wrapper = shallow(<Login />);

    return {
        wrapper,
    };
};

describe('Login Component', () => {
    const { wrapper } = component();
    // case 1 判断组件是否正常渲染
    it('login Component should be render', () => {
        expect(wrapper.find('input').exists).toMatchSnapshot();
    });
    // case 2 判断点击事件是否可以触发
    // it('When the mouse was clicked, handleLogin() should be call', () => {
    //     const mockClick = {
    //         target: {
    //             value: 'Test Clicked'
    //         }
    //     };
    //     // expect(wrapper.find(''))
    // });
});
