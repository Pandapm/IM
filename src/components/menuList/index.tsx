import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { menuList, menuFeature, infoFeature } from './data';
import Menu from './menu';

import Home from '../Home/index';
import './style.less';
const logo = require('./favicon.png');

class MenuList extends React.Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu-aside">
                    <div className="menu-aside-header">
                        <NavLink to={'/menu'}>
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
                <div className="menu-content">
                    <Home />
                </div>
            </div>
        );
    }
}

export default MenuList;
