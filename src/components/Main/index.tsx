import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import { menuList, menuFeature, infoFeature } from '../../common/data';
import Home from '../Home';
import './style.less';

const Main = () => (
    <div className="menu-content">
        <Switch>
            <Route exact={true} path="/menu" component={Home} />
            {
                menuList.map((item, index) => (
                    <Route
                        key={`menu-${index}`}
                        path={item.link}
                        component={item.comp}
                    />
                ))
            }
            {
                menuFeature.map((item, index) => (
                    <Route
                        key={`feature-${index}`}
                        path={item.link}
                        component={item.comp}
                    />
                ))
            }
            {
                infoFeature.map((item, index) => (
                    <Route
                        key={`info-${index}`}
                        path={item.link}
                        component={item.comp}
                    />
                ))
            }          
        </Switch>
    </div>
);

export default Main;
