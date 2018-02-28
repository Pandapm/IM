import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { menuList, menuFeature } from './data';
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
                    <ul className="menu-basic">
                        {
                            menuList.map((item, index) => (
                                <li className="menu-list" key={index}>
                                    <NavLink to={item.link} activeClassName="cur">
                                        <i className={item.icon} />
                                        <span className="menu-info">{item.label}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="menu-feature">
                        {
                            menuFeature.map((item, index) => (
                                <li className="menu-list" key={index}>
                                    <NavLink to={item.link} activeClassName="cur">
                                        <i className={item.icon} />
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="menu-aside-footer">
                        <img src={logo} />
                    </div>
                </div>
                <div className="menu-content">content</div>
            </div>
        );
    }
}

export default MenuList;
