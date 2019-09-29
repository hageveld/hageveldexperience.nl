import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Carousel } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';

import Hageveld from '../images/hageveld_front.jpg';
import Kluisjes from '../images/1_kluisjes.jpg';
import LO_Instr from '../images/2_lo_instr.jpg';
import Mediath from '../images/3_mediath.jpg';
import Lokaal from '../images/4_lokaal.jpg';

import '../sass/index.scss';

const Index: FunctionComponent = () => (
    <Layout>
        <Title centered={true}>Hageveld Experience</Title>
        <Row style={{ marginLeft: '5%', marginRight: '5%' }}>
            <Col span={12} style={{ paddingRight: '5%' }}>
                <Carousel autoplay={true}>
                    <div>
                        <img width="100%" height="100%" src={Hageveld} />
                    </div>
                    <div>
                        <img width="100%" height="100%" src={Kluisjes} />
                    </div>
                    <div>
                        <img width="100%" height="100%" src={LO_Instr} />
                    </div>
                    <div>
                        <img width="100%" height="100%" src={Mediath} />
                    </div>
                    <div>
                        <img width="100%" height="100%" src={Lokaal} />
                    </div>
                </Carousel>
                <div>
                De data van de Hageveld Experience voor het schooljaar 2019-2020 zijn:<br />
<br />
woensdag 20 november 2019, 27 november 2019 en woensdag 8 januari 2020 van 14.00 -15.30 uur.
                </div>
            </Col>
            <Col span={12}>
                <h1>Welkom</h1>
                <div>
                Beste groep 8-er,<br />
                <br />
De grootste vraag waar je dit jaar voor staat, is “Naar welke school ga ik na de zomervakantie?”<br />
<br />
Het antwoord kan heel simpel zijn, want de leerlingen van onze school zullen zeggen:<br />
<br />
“naar Hageveld natuurlijk!”<br />
<br />
Zij voelen zich thuis bij ons en misschien jij ook wel? Ben jij al een echte nieuwsgierige vwo-leerling en wil je graag nu al een kijkje nemen in en op Hageveld?  Geef je dan op voor de Hageveld Experience! <br />
<br />
Tijdens de Hageveld Experience krijg je alvast een rondleiding of kun je speeddaten met Hageveldse leerlingen of een puzzeltocht door ons prachtige gebouw maken.<br />
<br />
Na de activiteit brengt de leerling je naar het juiste lokaal voor een proefles in het door jou gekozen vak.<br />
<br />
Op deze manier kun je ervaren hoe een les op Hageveld eruit ziet.<br />
                </div>
                <br />
                <Link to="/registreren"><Button type="primary">Meld je nu aan!</Button></Link>
            </Col>
        </Row>
    </Layout>
);

export default Index;
