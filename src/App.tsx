import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Login from './components/Login';
import MenuList from './components/MenuList';

const App = () => (
    <Switch>
        <Route
            exact={true}
            path="/"
            component={MenuList}
        />
        <Route
            exact={true}
            path="/login"
            component={Login}
        />
    </Switch>
);

export default App;
