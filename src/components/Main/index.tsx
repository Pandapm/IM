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
                menuList.map(item => (
                    <Route path={item.link} component={Home} />
                ))
            }
            {
                menuFeature.map(item => (
                    <Route path={item.link} component={Home} />
                ))
            }
            {
                infoFeature.map(item => (
                    <Route path={item.link} component={Home} />
                ))
            }          
        </Switch>
    </div>
);

export default Main;
