import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            console.log(localStorage.getItem('checkUser') === 'exist');
            if (localStorage.getItem('checkUser') === 'exist') {
                return (
                    <Component {...matchProps} />
                );
            }
            else {
                return <Redirect to="/" />
            }
        }} />
    )
};

export default DefaultLayout;