import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Row, Col, Button, Card, List, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dagen, vakken } from '../constants';

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
                    <Col span={8}>
                        <Card title="Dag 1" bordered={false}>
                            <List
                                itemLayout="horizontal"
                                dataSource={getVakkenByDag(1)}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar>
                                                    <FontAwesomeIcon icon={['fas', item.icon]} />
                                                </Avatar>
                                            }
                                            title={<a href="https://hageveld.nl">{item.naam}</a>}
                                            description="Beschrijving"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Dag 2" bordered={false}>
                            <List
                                itemLayout="horizontal"
                                dataSource={getVakkenByDag(2)}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar>
                                                    <FontAwesomeIcon icon={['fas', item.icon]} />
                                                </Avatar>
                                            }
                                            title={<a href="https://hageveld.nl">{item.naam}</a>}
                                            description="Beschrijving"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Dag 3" bordered={false}>
                            <List
                                itemLayout="horizontal"
                                dataSource={getVakkenByDag(3)}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar>
                                                    <FontAwesomeIcon icon={['fas', item.icon]} />
                                                </Avatar>
                                            }
                                            title={<a href="https://hageveld.nl">{item.naam}</a>}
                                            description="Beschrijving"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </Layout>
);

export default Inschrijven;
