import * as React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/login/index';

describe('Login Component', () => {
    it('login Component should be render', () => {
        shallow(<Login />);
    });
});
