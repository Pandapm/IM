import * as React from 'react';
import menuList from './data';

class MenuList extends React.Component {
    render() {
        return menuList.map((item, index) => (
            <div>{item.label}</div>
        ));
    }
}

export default MenuList;
