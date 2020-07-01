import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WebDev from './CategoryComps/WebDev';
import Publications from './CategoryComps/Publications';
import AboutMe from './CategoryComps/AboutMe';
import Home from './Home';

const RootPage = () => {
    return (
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/WebDev' component={WebDev} />
            <Route path='/Publications' component={Publications} />
            <Route path='/WebDev' component={AboutMe} />
            <Route render={({ location }) => (
                <div>
                    <h2>이 페이지는 존재하지 않습니다:</h2>
                    <p>{location.pathname}</p>
                </div>
            )} />
        </Switch>
    )
}

export default RootPage;