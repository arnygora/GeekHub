import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            console.log(localStorage.getItem('user') === 'user');
            if (localStorage.getItem('user') === 'exist') {
                return (
                    <Component {...matchProps} />
                );
            }
            else {
                return <Redirect to="./AuthorizationPage" />
            }
        }} />
    )
};

export default DefaultLayout;