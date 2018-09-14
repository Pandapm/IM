import * as React from 'react';
import { NavLink } from 'react-router-dom';

import MenuLink from './menu';
import Main from '../Main';
import { menuList, menuFeature, infoFeature } from '../../common/data';
import './style.less';

const prefixCls = 'menu-wrapper'; 

const MenuList = () => (
    <div className={prefixCls}>
        <div className={`${prefixCls}-aside`}>
            <div className={`${prefixCls}-aside-header`}>
                <NavLink to={'/'}>
                    <h3>X-More</h3>
                </NavLink>
            </div>
            <MenuLink
                clsName={`${prefixCls}-content-basic`}
                list={menuList}
            />
            <MenuLink
                clsName={`${prefixCls}-content-feature`}
                list={menuFeature}
            />
            <MenuLink
                clsName={`${prefixCls}-content-info`}
                list={infoFeature}
            />
            <div className={`${prefixCls}-footer`}>
                <p>test</p>
            </div>
        </div>
        <Main />
    </div>
);

export default MenuList;
