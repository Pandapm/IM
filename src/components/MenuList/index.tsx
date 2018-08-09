import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './menu';
import Main from '../Main';
import { menuList, menuFeature, infoFeature } from '../../common/data';
import './style.less';
const logo = require('./favicon.png');
const prefixCls = 'menu-wrapper'; 

const MenuList = () => (
    <div className={prefixCls}>
        <div className={`${prefixCls}-aside`}>
            <div className={`${prefixCls}-aside-header`}>
                <NavLink to={'/'}>
                    <h3>X-More</h3>
                </NavLink>
            </div>
            <Menu
                clsName={`${prefixCls}-content-basic`}
                list={menuList}
            />
            <Menu
                clsName={`${prefixCls}-content-feature`}
                list={menuFeature}
            />
            <Menu
                clsName={`${prefixCls}-content-info`}
                list={infoFeature}
            />
            <a className={`${prefixCls}-footer`}>
                <img src={logo} />
                <p className={`${prefixCls}-footer-name`}>杨远</p>
            </a>
        </div>
        <Main />
    </div>
);

export default MenuList;
