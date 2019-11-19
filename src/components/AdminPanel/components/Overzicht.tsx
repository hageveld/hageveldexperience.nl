import React, { FunctionComponent, Fragment } from 'react';
import { Switch } from 'antd';
import { useSelector } from '../../../hooks';

const Overzicht: FunctionComponent = () => {
    const auth = useSelector(state => state.auth.auth);

    return (
        <Fragment>
            <h2>Welkom, {auth.roepnaam}.</h2>
        </Fragment>
    );
};

export default Overzicht;
