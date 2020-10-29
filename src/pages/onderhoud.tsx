import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import ExternalLink from '../components/ExternalLink';
import { Row, Col, Button, Icon, Result } from 'antd';
import styled from 'styled-components';
import Title from '../components/Title';
import { useSelector } from '../hooks';

import '../sass/index.scss';

const SubTitle = styled(Title)`
    font-size: 20px !important;
    color: rgba(0, 0, 0, 0.45) !important;
`;

const Onderhoud: FunctionComponent<any> = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Layout>
            <Row style={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                <Col span={24}>
                    <Title centered={true}>Hageveld Experience</Title>
                    <SubTitle centered={true}>Schooljaar 2020-2021</SubTitle>
                    <Result
                        icon={<Icon type="clock-circle" theme="twoTone" />}
                        title="Experience nog niet beschikbaar"
                        subTitle="Je kan je helaas nog niet inschrijven. Dit kan vanaf maandag 2 november 2020."
                        extra={
                            <ExternalLink to="https://www.hageveld.nl/Groep-8/Experience">
                                <Button style={{ marginTop: '2.5%' }} type="primary">
                                    Meer informatie <Icon type="right" />
                                </Button>
                            </ExternalLink>
                        }
                    />
                </Col>
            </Row>
        </Layout>
    );
};

export default Onderhoud;
