import * as React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/login/index';

describe('Login Component', () => {
    // 判断组件是否正常渲染
    it('login Component should be render', () => {
        shallow(<Login />);
    });
});
