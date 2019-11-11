import React, { FunctionComponent, Fragment } from 'react';
import { Switch } from 'antd';

const Instellingen: FunctionComponent = () => (
    <Fragment>
        <h2>Instellingen</h2>
        <b>Inschrijvingen</b>: <Switch />
    </Fragment>
);

export default Instellingen;
