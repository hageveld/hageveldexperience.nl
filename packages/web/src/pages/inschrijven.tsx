import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Row, Col, Button, Card, List, Avatar, Icon, Statistic, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dagen, vakken } from '../constants';
import moment from 'moment';
import Vak from '../components/Vak';

import '../sass/index.scss';

const Title = styled.div`
    font-size: 40px;
    font-family: Georgia;
    color: #362e95;
    text-transform: uppercase;
    text-align: center;
`;

const getVakkenByDag = dag => vakken.filter(vak => vak.dagen.includes(dag));

const Inschrijven: FunctionComponent = () => (
    <Layout>
        <Title>Hageveld Experience</Title>
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    {dagen.map((dag, index) => (
                        <Col span={8} key={index}>
                            <Card
                                title={
                                    <div>
                                        Dag {dag.dag} -{' '}
                                        <DatePicker
                                            defaultValue={moment(dag.datum, 'DD-MM-YYYY')}
                                            format={'DD-MM-YYYY'}
                                            disabled={false}
                                        />
                                    </div>
                                }
                                bordered={false}
                            >
                                <List
                                    itemLayout="horizontal"
                                    dataSource={getVakkenByDag(dag.dag)}
                                    renderItem={item => (
                                        <Vak icon={item.icon} naam={item.naam} inschrijvingen={item.inschrijvingen ? item.inschrijvingen : 0} deelnemers={item.deelnemers} />
                                    )}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </Layout>
);

export default Inschrijven;
