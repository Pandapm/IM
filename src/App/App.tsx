import * as React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Wiki from '../components/wiki';
import './style.less';

class App extends React.Component {
    render() {
        type IRoute = {
            link: string,
            exact?: boolean,
            icon?: string,
            component?: any,
            subRoutes?: Array<IRoute>
        };
        
        const appPage: Array<IRoute> = [
            
            {
                link: '/wiki',
                component: Wiki,
            }
        ];
        return (
            <Router>
                <div className="xm-wrapper">
                <div className="xm-wrapper-inner">
                    <div id="xm-content">
                        <Switch>
                            {
                                appPage.map((item, index) => (
                                    <Route
                                        path={item.link}
                                        component={item.component}
                                    />
                                ))
                            }
                        </Switch>
                        <Link
                            to={'/wiki'}
                        >
                                <div className="xm-wiki" />
                        </Link>
                        <div className="xm-active" />
                        <div className="xm-logo">
                            <span id="xm-logo-font">Xiyou Mobile</span>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
            
        );
    }
}

export default App;
