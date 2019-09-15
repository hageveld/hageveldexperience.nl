import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Centered = styled.div`
    text-align: center;
`;

const Footer: FunctionComponent = () => (
    // informatica.hageveld.nl
    // ckv.hageveld.nl
    // shop.hageveld.nl
    // via.hageveld.nl (?)
    <Centered>
        <h2>© Hageveld {new Date().getFullYear()}</h2>
    </Centered>
);

export default Footer;
