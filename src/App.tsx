import * as React from 'react';
import {
    Switch,
    Route,
    // Router,
} from 'react-router-dom';
import Login from './components/Login';
import MenuList from './components/MenuList';
import NotFound from './common/404';

const App = () => (
    <Switch>
        <Route
            path="/"
            component={MenuList}
        />
        <Route
            exact={true}
            path="/login"
            component={Login}
        />
        <Route
            component={NotFound}
        />
    </Switch>
);

export default App;
