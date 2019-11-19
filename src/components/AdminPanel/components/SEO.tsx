import React, { FunctionComponent, Fragment } from 'react';
import { Switch } from 'antd';
import axios from 'axios';

const API_KEY = 'AIzaSyBKS-JGLuKIDSMkAidVSb4LuEdh0nlfnac';

const SEO: FunctionComponent = () => {
    axios
        .post(
            `https://www.googleapis.com/webmasters/v3/sites/hageveldexperience.nl/searchAnalytics/query?key=${API_KEY}`,
            {
                startDate: '2019-11-01',
                endDate: '2019-11-13',
                dimensions: ['country', 'device']
            }
        )
        .then(result => {
            console.log(result);
        });

    return (
        <Fragment>
            <h2>SEO</h2>
            <b>Inschrijvingen</b>: <Switch />
        </Fragment>
    );
};

export default SEO;
