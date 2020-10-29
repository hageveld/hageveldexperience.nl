import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { Alert, Row, Col, Card, List, Divider } from 'antd';
import { dagen, activiteiten, locked } from '../data';
import { Link, navigateTo } from 'gatsby';
import moment from 'moment';
import 'moment/locale/nl';
import ActiviteitModel from '../models/activiteit';
import Activiteit from '../components/Activiteit';
import { useSelector, useDispatch } from '../hooks';
import { updateActiviteiten } from '../store/activiteiten';
import { getActivities } from '../utils/api';

import '../sass/index.scss';

const Inschrijven: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);

    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!loading) {
            setLoading(true);
            getActivities().then(activities => {
                const activitiesData = activities.map(activity => {
                    return {
                        id: parseInt(activity.id.N, 10),
                        dag: parseInt(activity.dag.S, 10),
                        ingeschreven: activity.ingeschreven ? true : false,
                        deelnemers: parseInt(activity.deelnemers.N, 10)
                    };
                });
                dispatch(updateActiviteiten(activitiesData));
                setDone(true);
            });
        }
    });

    if (locked && !(isLoggedIn && auth && auth.admin)) {
        navigateTo('/onderhoud');
    }

    return (
        <Layout>
            <Title centered={true}>Inschrijven</Title>
            <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    {!isLoggedIn && (
                        <Alert
                            message={<Fragment>Je bent niet ingelogd.</Fragment>}
                            description={
                                <p>
                                    Dit betekent dat je momenteel niet kan inschrijven voor de
                                    proeflessen. Klik{' '}
                                    <Link to="/inloggen">
                                        <b>hier</b>
                                    </Link>{' '}
                                    om in te loggen.
                                </p>
                            }
                            type="warning"
                            showIcon={true}
                            style={{ marginBottom: '10px' }}
                        />
                    )}
                    <Alert
                        message={
                            <Fragment>
                                Op deze pagina kun je je inschrijven voor de proeflessen. Hieronder
                                kun je kiezen uit vakken die op Hageveld gegeven worden. Of nou je
                                een taal kiest of een praktisch vak, op een leuke en creatieve
                                manier maak je kennis bij dat vak.
                                <br />
                                Indien je een keuze wilt wijzigen, klik dan nogmaals op het groene
                                vinkje om je uit te schrijven.
                                <br />
                                <br />
                                <b>Let op</b>: Je kunt je voor maximaal 2 dagen inschrijven, en
                                maximaal 1 vak per dag.
                            </Fragment>
                        }
                        type="info"
                        showIcon={true}
                        style={{ marginBottom: '20px' }}
                    />
                    <Row gutter={16}>
                        {dagen
                            .filter(dag => !('hidden' in dag) || !dag.hidden)
                            .map((dag, index) => {
                                const dagActiviteiten = activiteiten.filter(
                                    activiteit => activiteit.dag.id === dag.id
                                );

                                return (
                                    <Col
                                        span={8}
                                        key={index}
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={8}
                                        style={{
                                            opacity:
                                                Date.now() <
                                                moment(dag.datum, 'DD-MM-YYYY').valueOf()
                                                    ? 1.0
                                                    : 0.3,
                                            pointerEvents:
                                                Date.now() <
                                                moment(dag.datum, 'DD-MM-YYYY').valueOf()
                                                    ? 'auto'
                                                    : 'none'
                                        }}
                                    >
                                        <Card
                                            title={
                                                <Row>
                                                    <Col span={8}>
                                                        {dag.titel}
                                                        <br />
                                                        <span style={{ fontSize: '10px' }}>
                                                            {dag.beschrijving}
                                                        </span>
                                                    </Col>
                                                    <Col span={16} style={{ textAlign: 'right' }}>
                                                        {moment(dag.datum, 'DD-MM-YYYY')
                                                            .locale('nl')
                                                            .format('D MMMM YYYY')}
                                                        <br />
                                                        <span style={{ fontSize: '10px' }}>
                                                            {dag.startTijd} - {dag.eindTijd}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            }
                                            bordered={false}
                                        >
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={dagActiviteiten}
                                                renderItem={(
                                                    activiteit: ActiviteitModel,
                                                    activiteitIndex: number
                                                ) => (
                                                    <Fragment>
                                                        <Activiteit
                                                            data={activiteit}
                                                            fetching={!done}
                                                        />
                                                        {activiteitIndex <
                                                            dagActiviteiten.length - 1 && (
                                                            <Divider style={{ margin: '15px' }} />
                                                        )}
                                                    </Fragment>
                                                )}
                                            />
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </div>
            </div>
        </Layout>
    );
};

export default Inschrijven;
