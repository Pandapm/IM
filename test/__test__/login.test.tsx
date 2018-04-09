import { mount } from 'enzyme';

import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import Login from '../../src/components/Login';

describe('<Login /> --- Snapshot', () => {
    it('Snapshot', () => {
        const component = ReactTestRenderer.create(<Login />);
        let snapshot = component.toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});

describe('<Login /> --- Shallow React Render Components', () => {
    it('DOM', () => {
        const component = mount(<Login />);
        component.find('button').simulate('click');
    });
});