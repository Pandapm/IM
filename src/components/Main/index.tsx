import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import { menuList, menuFeature, infoFeature } from '../../common/data';
import Home from '../Home';
import NotFound from '../../common/404';
import './style.less';

const prefixCls = 'menu-wrapper-content';

const Main = () => (
    <div className={prefixCls}>
        <Switch>
            <Route
                exact={true}
                path="/"
                component={Home}
            />
            {
                menuList.concat(menuFeature, infoFeature).map((item, index) => (
                    <Route
                        key={`menu-${index}`}
                        path={item.link}
                        component={item.comp}
                    />
                ))
            }
            <Route
                component={NotFound}
            />
        </Switch>
    </div>
);

export default Main;
