import * as React from 'react';
import { Link } from 'react-router-dom';

import { menuList, menuFeature } from './data';
import './style.less';
const logo = require('./favicon.png');

class MenuList extends React.Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu-aside">
                    <div className="menu-aside-header">
                        <h3>Xiyou</h3>
                    </div>
                    <ul className="menu-basic">
                        {
                            menuList.map((item, index) => (
                                <li className="menu-list" key={index}>
                                    <Link to={item.link}>
                                        <i className={item.icon} />
                                        <span id="menu-info">{item.label}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="menu-feature">
                        {
                            menuFeature.map((item, index) => (
                                <li className="menu-list" key={index}>
                                    <Link to={item.link}>
                                        <i className={item.icon} />
                                    </Link>
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
