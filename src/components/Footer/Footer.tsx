// tslint:disable:no-http-string

import React, { FunctionComponent } from 'react';
import ExternalLink from '../ExternalLink';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Favicon from '../../images/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrapper = styled.div`
    //background-color: #5B34AD;
    //color: white;
`;

const socials: any = [
    {
        icon: ['fas', 'envelope'],
        url: 'mailto:college@hageveld.nl'
    },
    {
        icon: ['fab', 'instagram'],
        url: 'https://www.instagram.com/college.hageveld/'
    },
    {
        icon: ['fab', 'facebook-square'],
        url: 'https://nl-nl.facebook.com/Hageveld/'
    },
    {
        icon: ['fab', 'linkedin'],
        url: 'https://www.linkedin.com/school/college-hageveld/'
    },
    {
        icon: ['fab', 'youtube'],
        url: 'https://www.youtube.com/channel/UCU0sMRDZcW6MGujyGeqHXFA'
    },
    {
        icon: ['fas', 'phone'],
        url: 'tel:+310235100100'
    },
    {
        icon: ['fas', 'map-marker-alt'],
        url: 'https://goo.gl/maps/GrvUce5ri1kZPBhN8'
    }
];

const Footer: FunctionComponent = () => (
    <FooterWrapper>
        <Row>
            <Col span={6}>
                <div>
                    <img width="32" src={Favicon} style={{ float: 'left' }} />
                    <h2>Hageveld</h2>
                </div>
                <div>
                    Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in
                    een gebouw dat voorheen een klein-seminarie herbergde. Het is een sfeervol
                    monumentaal gebouw dat wordt omzoomd door veel groen. Ook de sportvelden liggen
                    rondom de school. College Hageveld is het enige zelfstandige atheneum dat
                    Nederland telt.
                </div>
                <div>
                    <Row style={{ width: '50%' }}>
                        {socials.map(social => (
                            <Col span={3}>
                                <ExternalLink to={social.url}>
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </ExternalLink>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={8}>
                            <p>© {new Date().getFullYear()} Hageveld</p>
                        </Col>
                        <Col span={8}>Disclaimer</Col>
                        <Col span={8}>1.0.0</Col>
                    </Row>
                </div>
            </Col>
            <Col span={6}>
                <h2>Links</h2>
                <p>Algemeen</p>
                <p>Onderwijs</p>
                <p>Schoolgids</p>
                <p>VIA</p>
                <p>Begeleiding</p>
                <p>Aanmelden</p>
                <p>Vacatures</p>
            </Col>
            <Col span={6}>
                <h2>Leerlingen</h2>
                <p>
                    <ExternalLink to="https://hageveld.magister.net">Magister</ExternalLink>
                </p>
                <p>
                    <ExternalLink to="https://login.microsoftonline.com">Office 365</ExternalLink>
                </p>
                <p>
                    <ExternalLink to="http://informatica.hageveld.nl">Informatica</ExternalLink>
                </p>
                <p>
                    <ExternalLink to="https://via.hageveld.nl">VIA</ExternalLink>
                </p>
                <p>
                    <ExternalLink to="http://shop.hageveld.nl">Shop</ExternalLink>
                </p>
            </Col>
            <Col span={6}>
                <h2>Contact</h2>
                <div>
                    Atheneum College Hageveld
                    <br />
                    Hageveld 15
                    <br />
                    2102 LM Heemstede
                    <br />
                    <br />
                    Tel. 023 5 100 100
                    <br />
                    Fax 023 5 100 150
                    <br />
                    <br />
                    Mail college@hageveld.nl
                    <br />
                </div>
            </Col>
        </Row>
    </FooterWrapper>
);

export default Footer;
