import React from  'react';
import { Switch, Route } from 'react-router-dom';

import DashBoard from '../pages/dashboard';
import MapView from '../pages/mapView';

const Routes: React.FC = () => (
    <Switch>
        <Route exact component={DashBoard} path='/'></Route>
        <Route exact component={MapView} path='/mapview'></Route>
    </Switch>
);

export default Routes;