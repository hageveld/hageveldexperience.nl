import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button } from 'antd';
import { Link } from 'gatsby';
import Hageveld from '../images/hageveld_front.jpg';
import Title from '../components/Title';

import '../sass/index.scss';

const Index: FunctionComponent = () => (
    <Layout>
        <Title centered={true}>Hageveld Experience</Title>
        <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
            <Col span={12} style={{ paddingRight: '5%' }}>
                <img width="700px" src={Hageveld} />
                <div>
                    Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in
                    een gebouw dat voorheen een klein-seminarie herbergde. Het is een sfeervol
                    monumentaal gebouw dat wordt omzoomd door veel groen. Ook de sportvelden liggen
                    rondom de school. College Hageveld is het enige zelfstandige atheneum dat
                    Nederland telt. Wij bieden onze leerlingen een inspirerende werkomgeving. De
                    sfeer die wij als school nastreven laat zich het best vangen in een zevental
                    trefwoorden: Betrokkenheid, Vertrouwen, Veiligheid, Respect, Enthousiasme,
                    Uitdaging en Ontplooiing. Het zijn de bouwstenen van ons atheneum.
                </div>
            </Col>
            <Col span={12}>
                <h2>Welkom</h2>
                <br />
                <Link to="/registreren"><Button type="primary">Aanmelden</Button></Link>
            </Col>
        </Row>
    </Layout>
);

export default Index;
