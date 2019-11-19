import React, { FunctionComponent, useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Result, Icon, Layout as AntLayout, Menu } from 'antd';
import { Link } from 'gatsby';
import Title from '../../components/Title';
import { useSelector } from '../../hooks';
import { getAdminData } from '../../utils/api';
import { activiteiten, dagen } from '../../data';
import Dagen from '../../components/AdminPanel/components/Dagen';
import Gebruikers from '../../components/AdminPanel/components/Gebruikers';
import Inschrijvingen from '../../components/AdminPanel/components/Inschrijvingen';
import Statistieken from '../../components/AdminPanel/components/Statistieken';
import Vakken from '../../components/AdminPanel/components/Vakken';
import Instellingen from '../../components/AdminPanel/components/Instellingen';
import Inbox from '../../components/AdminPanel/components/Inbox';
import Activiteiten from '../../components/AdminPanel/components/Activiteiten';
import SEO from '../../components/AdminPanel/components/SEO';
import CloudWatch from '../../components/AdminPanel/components/CloudWatch';
import Overzicht from '../../components/AdminPanel/components/Overzicht';

import '../../sass/index.scss';

const { Sider } = AntLayout;

const Admin: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);
    if (isLoggedIn && auth && auth.admin) {
        const [result, setResult] = useState({
            gebruikers: 0,
            inschrijvingen: 0,
            verwijzingen: {},
            inschrijvingenGemiddelde: {},
            dagen: {},
            dagenExtended: {},
            vakken: {},
            inschrijvingenItems: [],
            gebruikersItems: [],
            emailUser: '',
            emailPassword: ''
        });
        const [done, setDone] = useState(false);
        const [loading, setLoading] = useState(false);
        const [selectedItem, setSelectedItem] = useState(1);
        if (!done && !loading) {
            setLoading(true);
            getAdminData().then(response => {
                const dagenData: any = { ...dagen };
                Object.values(dagenData).map((dagData: any) => {
                    const dagActiviteiten = activiteiten.filter(
                        activiteit => activiteit.dag.id === dagData.id
                    );
                    const maxDeelnemers = dagActiviteiten
                        .map(activiteit => activiteit.maxDeelnemers)
                        .reduce((a, b) => a + b);
                    dagData.maxDeelnemers = maxDeelnemers;
                    dagData.inschrijvingen = 0;

                    return dagData;
                });

                response.inschrijvingenItems.forEach(item => {
                    const dagActiviteit: any = activiteiten.find(
                        activiteit => activiteit.id === item.activiteit
                    );
                    const dag = dagActiviteit.dag.id;
                    const dagItem: any = Object.values(dagenData).find(
                        (dagData: any) => dagData.id === dag
                    );
                    dagItem.inschrijvingen++;
                });

                setResult({ ...response, dagenExtended: dagenData });
                setDone(true);
                setLoading(false);
            });
        }
        return (
            <Layout noMargin={true}>
                <hr style={{ margin: '0', border: '2px solid #001529', height: '0px' }} />
                <AntLayout style={{ padding: '0px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%' }}
                            theme="dark"
                            onSelect={item => setSelectedItem(parseInt(item.key, 10))}
                        >
                            <p style={{ visibility: 'hidden', fontSize: '20px' }}>.</p>
                            <span
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginLeft: '10px'
                                }}
                            >
                                <Icon type="crown" style={{ marginRight: '5px' }} /> Admin
                            </span>
                            <Menu.ItemGroup title="Algemeen" style={{ marginTop: '20px' }}>
                                <Menu.Item key="1">
                                    <Icon type="dashboard" /> Overzicht
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="pie-chart" /> Statistieken
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="profile" /> Inschrijvingen
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="team" /> Gebruikers
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="cloud-server" /> CloudWatch
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Icon type="book" /> Logboek
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Data">
                                <Menu.Item key="7">
                                    <Icon type="project" /> Vakken
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Icon type="calendar" /> Dagen
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Icon type="schedule" /> Activiteiten
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Overig">
                                <Menu.Item key="10">
                                    <Icon type="euro" /> Facturen
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Icon type="monitor" /> SEO
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Icon type="mail" /> Inbox
                                </Menu.Item>
                                <Menu.Item key="13">
                                    <Icon type="tool" /> Instellingen
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </Menu>
                    </Sider>
                    <AntLayout.Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <br />
                        {selectedItem === 1 && <Overzicht />}
                        {selectedItem === 2 && <Statistieken data={result} />}
                        {selectedItem === 3 && (
                            <Inschrijvingen
                                inschrijvingen={result.inschrijvingenItems}
                                gebruikers={result.gebruikersItems}
                            />
                        )}
                        {selectedItem === 4 && <Gebruikers data={result.gebruikersItems} />}
                        {selectedItem === 5 && <CloudWatch />}
                        {selectedItem === 6 && <p>Binnenkort beschikbaar</p>}
                        {selectedItem === 7 && <Vakken />}
                        {selectedItem === 8 && <Dagen data={result.dagenExtended} />}
                        {selectedItem === 9 && <Activiteiten />}
                        {selectedItem === 10 && <p>Binnenkort beschikbaar</p>}
                        {selectedItem === 11 && <SEO />}
                        {selectedItem === 12 && <Inbox />}
                        {selectedItem === 13 && <Instellingen />}
                    </AntLayout.Content>
                </AntLayout>
            </Layout>
        );
    } else if (isLoggedIn && (!auth || !auth.admin)) {
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
