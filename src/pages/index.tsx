import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

import '../sass/index.scss';

const Title = styled.div`
    font-size: 40px;
    font-family: Georgia;
    color: #362e95;
    text-transform: uppercase;
`;

const Index: FunctionComponent = () => (
    <Layout>
        <Title>College Hageveld</Title>
    </Layout>
);

export default Index;
