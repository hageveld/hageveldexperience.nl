import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

import '../sass/index.scss';

const Title = styled.div`
    font-size: 40px;
    font-family: Georgia;
    color: #362e95;
    text-transform: uppercase;
    text-align: center;
`;

const Index: FunctionComponent = () => (
    <Layout>
        <Title>College Hageveld</Title>
        <div>
            Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in een gebouw
            dat voorheen een klein-seminarie herbergde. Het is een sfeervol monumentaal gebouw dat
            wordt omzoomd door veel groen. Ook de sportvelden liggen rondom de school. College
            Hageveld is het enige zelfstandige atheneum dat Nederland telt. Wij bieden onze
            leerlingen een inspirerende werkomgeving. De sfeer die wij als school nastreven laat
            zich het best vangen in een zevental trefwoorden: Betrokkenheid, Vertrouwen, Veiligheid,
            Respect, Enthousiasme, Uitdaging en Ontplooiing. Het zijn de bouwstenen van ons
            atheneum.
        </div>
    </Layout>
);

export default Index;
