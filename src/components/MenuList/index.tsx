import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { menuList, menuFeature, infoFeature } from '../../common/data';
import Menu from './menu';
import Main from '../Main';
import './style.less';
const logo = require('./favicon.png');

const MenuList = () => (
    <div className="menu-wrapper">
        <div className="menu-aside">
            <div className="menu-aside-header">
                <NavLink to={'/'}>
                    <h3>Xiyou</h3>
                </NavLink>
            </div>
            <Menu
                clsName={'menu-basic'}
                list={menuList}
            />
            <Menu
                clsName={'menu-feature'}
                list={menuFeature}
            />
            <Menu
                clsName={'info-feature'}
                list={infoFeature}
            />
            <div className="menu-aside-footer">
                <img src={logo} />
            </div>
        </div>
        <Main />
    </div>
);

export default MenuList;
