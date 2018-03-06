import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MenuList from './components/menuList';
import Login from './components/login';

const App = () => {
    type IRoute = {
        link: string,
        exact?: boolean,
        icon?: string,
        component?: any,
        subRoutes?: Array<IRoute>
    };
    
    const appPage: Array<IRoute> = [
        {
            link: '/login',
            component: Login,
        },
        {
            link: '/menu',
            component: MenuList,
        }
    ];
    return (
        <Router>
            <Switch>
                {
                    appPage.map((item, index) => (
                        <Route
                            key={index}
                            path={item.link}
                            component={item.component}
                        />
                    ))
                }
            </Switch>
        </Router>
    );
};

export default App;
