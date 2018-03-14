import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../../src/components/Login/index';

describe('Login Component', () => {
    // case 1 判断组件是否正常渲染
    it('login Component should be render', () => {
        const component = renderer.create(
            <Login />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
