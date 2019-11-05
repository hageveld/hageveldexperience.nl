import React, { FunctionComponent, useState } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button, Result, Icon, Statistic } from 'antd';
import PieChart from 'react-minimal-pie-chart';
import { Link, navigate } from 'gatsby';
import Title from '../components/Title';
import { useSelector } from '../hooks';
import axios from 'axios';
import colors from 'nice-color-palettes';

import '../sass/index.scss';

/* 
TODO:
- Heatmap van scholen
- Lijst van inschrijvingen per vak (gebruikersgegevens)
- Man/vrouw-verhouding?
- Gegevens van CloudWatch: OS, Browser, requests, etc.
*/

const Admin: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);
    if(isLoggedIn && auth.admin) {
        const [result, setResult] = useState({
            gebruikers: 0,
            inschrijvingen: 0,
            verwijzingen: {},
            inschrijvingenGemiddelde: {},
            dagen: {},
            vakken: {}
        });
        const [done, setDone] = useState(false);
        const [loading, setLoading] = useState(false);
        if(!done && !loading) {
            setLoading(true);
            axios.post('https://api.hageveldexperience.nl/admin', {
                email: auth.email,
                wachtwoord: auth.wachtwoord
            }).then(response => {
                const { result } = response.data;
                setResult(result);
                setDone(true);
                setLoading(false);
            }).catch(error => {
                navigate("/error");
            });
        }
        return (
            <Layout>
                <Title centered={true}><Icon type="crown" /> Hageveld Experience</Title>
                <br />
                <Row gutter={16} style={{ textAlign: 'center' }}>
                    <Col span={12}>
                        <Statistic title="Gebruikers" value={result.gebruikers} groupSeparator="." decimalSeparator="," />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Inschrijvingen" value={result.inschrijvingen} groupSeparator="." decimalSeparator="," />
                    </Col>
                </Row>
                <br /><br /><br />
                <Row gutter={24} style={{ textAlign: 'center', marginLeft: '60px', marginRight: '60px' }}>
                    <Col span={12}>
                        <h2>Verwijzing</h2>
                        <PieChart
                            radius={35}
                            lineWidth={13}
                            label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                            labelStyle={{
                                fontSize: '3px'
                            }}
                            labelPosition={120}
                            data={Object.keys(result.verwijzingen).map((verwijzing, index) => {
                                const aantal = result.verwijzingen[verwijzing];
                                const color = colors[6][index];
                                return {
                                    title: verwijzing,
                                    value: aantal,
                                    color
                                };
                            }) as any}
                            style={{
                                height: '400px'
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <h2>Inschrijvingen per gebruiker</h2>
                        <PieChart
                            radius={35}
                            lineWidth={13}
                            label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                            labelStyle={{
                                fontSize: '3px'
                            }}
                            labelPosition={120}
                            data={Object.keys(result.inschrijvingenGemiddelde).map((inschrijvingen, index) => {
                                const aantal = result.inschrijvingenGemiddelde[inschrijvingen];
                                const color = colors[21][index];
                                return {
                                    title: inschrijvingen,
                                    value: aantal,
                                    color
                                };
                            }) as any}
                            style={{
                                height: '400px'
                            }}
                        />
                    </Col>
                </Row>
                <br /><br />
                <Row gutter={24} style={{ textAlign: 'center', marginLeft: '60px', marginRight: '60px' }}>
                    <Col span={12}>
                        <h2>Inschrijvingen per dag</h2>
                        <PieChart
                            radius={35}
                            lineWidth={13}
                            label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                            labelStyle={{
                                fontSize: '3px'
                            }}
                            labelPosition={120}
                            data={Object.keys(result.dagen).map((dag, index) => {
                                const aantal = result.dagen[dag];
                                const color = colors[28][index];
                                return {
                                    title: dag,
                                    value: aantal,
                                    color
                                };
                            }) as any}
                            style={{
                                height: '400px'
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <h2>Inschrijvingen per vak</h2>
                        <PieChart
                            radius={35}
                            lineWidth={13}
                            label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                            labelStyle={{
                                fontSize: '3px'
                            }}
                            labelPosition={120}
                            data={Object.keys(result.vakken).map((vak, index) => {
                                const aantal = result.vakken[vak];
                                const color = [ ...colors[29], ...colors[30], ...colors[39] ][index];
                                return {
                                    title: vak,
                                    value: aantal,
                                    color
                                };
                            }) as any}
                            style={{
                                height: '400px'
                            }}
                        />
                    </Col>
                </Row>
            </Layout>
        );
    } else if(!auth.admin) {
        return (
            <Layout>
                <Title centered={true}>Hageveld Experience</Title>
                <Result
                    status="error"
                    title="Onvoldoende rechten"
                    subTitle="Je beschikt over onvoldoende rechten om het adminpaneel te bekijken."
                    extra={
                        <Link to="/">
                            <Button type="primary">
                                <Icon type="left" /> Keer terug
                            </Button>
                        </Link>
                    }
                />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <Title centered={true}>Hageveld Experience</Title>
                <Result
                    status="warning"
                    title="Je bent niet ingelogd."
                    subTitle="Om het adminpaneel te bekijken moet je ingelogd zijn"
                    extra={
                        <Link to="/inloggen">
                            <Button type="primary">
                                <Icon type="form" /> Inloggen
                            </Button>
                        </Link>
                    }
                />
            </Layout>
        );
    }
};

export default Admin;
