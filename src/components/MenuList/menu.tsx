/**
 * @author Yuan
 * @description 右侧菜单栏组件
 */

import * as React from 'react';
import { NavLink } from 'react-router-dom';

type XMenu = {
    icon?: string,
    label: string,
    link: string,
};

export interface Props {
    clsName: string;
    list: Array<XMenu>;
}

const MenuLink = ({ list, clsName }: Props) => (
    <ul className={clsName}>
        {
            list.map((item, index) => (
                <li className="menu-list" key={index}>
                    <NavLink to={item.link} activeClassName="cur">
                        <i className={item.icon} />
                        <span className="menu-info">{item.label}</span>
                    </NavLink>
                </li>
            ))
        }
    </ul>
);

export default MenuLink;
