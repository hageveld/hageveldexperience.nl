import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { Row, Col, Card, List, DatePicker } from 'antd';
import { dagen, activiteiten } from '../data';
import moment from 'moment';
import ActiviteitType from '../classes/activiteit';
import Activiteit from '../components/Activiteit';

import '../sass/index.scss';

const Inschrijven: FunctionComponent = () => (
    <Layout>
        <Title centered={true}>Inschrijven</Title>
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    {dagen.map((dag, index) => (
                        <Col span={8} key={index}>
                            <Card
                                title={
                                    <div>
                                        Dag {dag.id} -{' '}
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
                                    dataSource={activiteiten.filter(activiteit => activiteit.dag.id === dag.id)}
                                    renderItem={(activiteit: ActiviteitType) => <Activiteit data={activiteit} />}
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
