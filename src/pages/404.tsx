import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

import '../sass/index.scss';

const NotFound: FunctionComponent = () => (
    <Layout>
        <h1>Niet gevonden</h1>
        <Link to="/">Keer terug</Link>
    </Layout>
);

export default NotFound;
