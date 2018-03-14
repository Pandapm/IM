import { shallow, mount } from 'enzyme';

import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import Login from '../../src/components/Login';

describe('<Login /> --- Snapshot', () => {
    it('Snapshot', () => {
        const component = ReactTestRenderer.create(<Login />);
        let snapshot = component.toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('DOM', () => {
        const component = mount(<Login />);
        let res = component.find('button').simulate('click');
        console.info(res);
        // expect(res).toBe('alert1');
    });
});
