import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WebDev from './CategoryComps/WebDev';
import Publications from './CategoryComps/Publications';
import AboutMe from './CategoryComps/AboutMe';
import Home from './Home';
import styled from 'styled-components';

const RootPage = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/WebDev' component={WebDev} exact />
            <Route path='/Publications' component={Publications} exact />
            <Route path='/AboutMe' component={AboutMe} exact />
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