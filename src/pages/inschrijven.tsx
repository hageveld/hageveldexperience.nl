import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Row, Col, Button, Card, List, Avatar, Icon, Statistic, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dagen, vakken } from '../constants';
import moment from 'moment';

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
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={
                                                    <Avatar>
                                                        <FontAwesomeIcon
                                                            icon={['fas', item.icon]}
                                                        />
                                                    </Avatar>
                                                }
                                                title={
                                                    <a href="https://hageveld.nl">{item.naam}</a>
                                                }
                                                description={
                                                    <Row gutter={12}>
                                                        <Col span={6}>
                                                            <p>Test</p>
                                                        </Col>
                                                        <Col span={6} style={{ float: 'right' }}>
                                                            {item.ingeschreven ? (
                                                                <Button
                                                                    type="primary"
                                                                    shape="circle"
                                                                    icon="check"
                                                                    style={{
                                                                        backgroundColor: '#52c41a',
                                                                        borderColor: '#52c41a'
                                                                    }}
                                                                />
                                                            ) : (
                                                                <Button
                                                                    type="primary"
                                                                    shape="circle"
                                                                    icon="plus"
                                                                />
                                                            )}
                                                        </Col>
                                                        <Col span={6} style={{ float: 'right' }}>
                                                            <Statistic
                                                                title="Inschrijvingen"
                                                                value={
                                                                    item.inschrijvingen
                                                                        ? item.inschrijvingen
                                                                        : 0
                                                                }
                                                                suffix={`/ ${item.deelnemers}`}
                                                            />
                                                        </Col>
                                                    </Row>
                                                }
                                            />
                                        </List.Item>
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
