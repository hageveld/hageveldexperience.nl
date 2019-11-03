import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { Alert, Row, Col, Card, List } from 'antd';
import { dagen, activiteiten } from '../data';
import moment from 'moment';
import 'moment/locale/nl';
import ActiviteitType from '../classes/activiteit';
import Activiteit from '../components/Activiteit';
import axios from 'axios';

import '../sass/index.scss';

moment.locale('nl');

const Inschrijven: FunctionComponent = () => {
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activities, setActivities] = useState({} as any);
    useEffect(() => {
    if(!loading) {
        setLoading(true);
        axios.get("https://api.hageveldexperience.nl/activities").then(response => {
            const { result } = response.data;
            console.log(result);
            result.forEach(activiteit => {
                activities[activiteit.id.N] = {
                    id: activiteit.id.N,
                    deelnemers: activiteit.deelnemers.N
                };
            });
            setActivities(activities);
            setDone(true);
        });
    }
    });
    console.log(activities);
    return (
        <Layout>
            <Title centered={true}>Inschrijven</Title>
            <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Alert message={
                            <Fragment>
                                Op deze pagina kun je je inschrijven voor de proeflessen. Hieronder kun je kiezen uit vakken die op Hageveld gegeven worden. Of nou je een taal kiest of een praktisch vak, op een leuke en creatieve manier maak je kennis bij dat vak.
                                <br />
                                Indien je een keuze wilt wijzigen, klik dan nogmaals op het groene vinkje om je uit te schrijven.
                                <br /><br />
                                <b>Let op</b>: Je kunt je voor maximaal 2 dagen inschrijven, en maximaal 1 vak per dag.
                            </Fragment>
                        } 
                        type="info" showIcon={true} style={{ marginBottom: '20px' }} 
                    />
                    <Row gutter={16}>
                        {dagen.map((dag, index) => (
                            <Col span={8} key={index} xs={24} sm={24} md={24} lg={8} style={{ opacity: Date.now() < moment(dag.datum, "DD-MM-YYYY").valueOf() ? 1.0 : 0.3, pointerEvents: Date.now() < moment(dag.datum, "DD-MM-YYYY").valueOf() ? "auto": "none" }}>
                                <Card
                                    title={
                                        <Row>
                                            <Col span={12}>
                                                Dag {dag.id}
                                                <br />
                                                <span style={{ fontSize: '10px' }}>{dag.beschrijving}</span>
                                            </Col>
                                            <Col span={12} style={{ textAlign: 'right' }}>
                                                {moment(dag.datum, "DD-MM-YYYY").format('D MMMM YYYY')}
                                                <br />
                                                <span style={{ fontSize: '10px' }}>{dag.startTijd} - {dag.eindTijd}</span>
                                            </Col>
                                            
                                        </Row>
                                    }
                                    bordered={false}
                                >
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={activiteiten.filter(activiteit => activiteit.dag.id === dag.id)}
                                        renderItem={(activiteit: ActiviteitType) => <Activiteit data={activiteit} api={activities[activiteit.id]} />}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Layout>
    );
}

export default Inschrijven;
