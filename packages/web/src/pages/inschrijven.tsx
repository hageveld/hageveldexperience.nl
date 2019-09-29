import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { Row, Col, Card, List, DatePicker } from 'antd';
import { dagen, vakken, activiteiten } from '../constants';
import moment from 'moment';
import Activiteit from '../components/Activiteit';

import '../sass/index.scss';

const getActiviteitenByDag = dag => activiteiten.filter(activiteit => activiteit.dag === dag).map(activiteit => ({ ...activiteit, dag: dagen.find(dag => dag.dag === activiteit.dag), vak: vakken.find(vak => vak.id === activiteit.vak)}));

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
                                    dataSource={getActiviteitenByDag(dag.dag)}
                                    renderItem={(item: any) => (
                                        <Activiteit vak={item.vak} dag={item.dag} inschrijvingen={item.inschrijvingen ? item.inschrijvingen : 0} deelnemers={item.maxDeelnemers} />
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
