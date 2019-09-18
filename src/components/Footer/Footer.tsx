import React, { FunctionComponent } from 'react';
import ExternalLink from '../ExternalLink';
import { Row, Col, Divider } from 'antd';
import styled from 'styled-components';
import Favicon from '../../images/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: FunctionComponent<any> = ({ text }) => <div>{text}</div>;

const FooterWrapper = styled.div`
    margin-left: 50px;
    margin-right: 50px;
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

const getMapOptions = (maps: any) => {
    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        styles: [
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
        ],
        gestureHandling: 'greedy',
        disableDoubleClickZoom: true,
        minZoom: 11,
        maxZoom: 18,

        mapTypeControl: true,
        //mapTypeId: maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [maps.MapTypeId.ROADMAP, maps.MapTypeId.SATELLITE, maps.MapTypeId.HYBRID]
        },

        zoomControl: true,
        clickableIcons: false
    };
};

const Footer: FunctionComponent = () => (
    <FooterWrapper>
        <Divider />
        <Row>
            <Col span={8}>
                <div>
                    <img width="32" src={Favicon} style={{ float: 'left' }} />
                    <h2>Hageveld</h2>
                </div>
                <div style={{ fontSize: '11px', marginTop: '5px', marginBottom: '10px' }}>
                    Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in
                    een gebouw dat voorheen een klein-seminarie herbergde. Het is een sfeervol
                    monumentaal gebouw dat wordt omzoomd door veel groen. Ook de sportvelden liggen
                    rondom de school. College Hageveld is het enige zelfstandige atheneum dat
                    Nederland telt.
                </div>
                <div>
                    <Row style={{ width: '100%' }}>
                        {socials.map((social, index) => (
                            <Col span={3} key={index}>
                                <ExternalLink to={social.url}>
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </ExternalLink>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Row>
                        <Col span={8}>
                            <p>© {new Date().getFullYear()} Hageveld</p>
                        </Col>
                        <Col span={8} />
                        <Col span={8}>Disclaimer</Col>
                    </Row>
                </div>
            </Col>
            <Col span={8}>
                <div style={{ height: '200px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'KEY' }}
                        defaultCenter={{ lat: 52.348391, lng: 4.6321063 }}
                        defaultZoom={15}
                        options={getMapOptions}
                    >
                        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                    </GoogleMapReact>
                </div>
            </Col>
            <Col span={8}>
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
