import React, { FunctionComponent, Fragment, useState } from 'react';
import Layout from '../components/Layout';
import {
    Row,
    Col,
    Button,
    Result,
    Icon,
    Statistic,
    Layout as AntLayout,
    Menu,
    Switch,
    Table,
    Collapse,
    Progress
} from 'antd';
import MetaData from '../components/MetaData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PieChart from 'react-minimal-pie-chart';
import { Link, navigate } from 'gatsby';
import Title from '../components/Title';
import { useSelector } from '../hooks';
import axios from 'axios';
import colors from 'nice-color-palettes';
import { activiteiten, dagen } from '../data';

import '../sass/index.scss';

const { Sider } = AntLayout;
const { Panel } = Collapse;

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
            axios
                .post('https://api.hageveldexperience.nl/admin', {
                    email: auth.email,
                    wachtwoord: auth.wachtwoord
                })
                .then(response => {
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

                    response.data.result.inschrijvingenItems.forEach(item => {
                        const dagActiviteit: any = activiteiten.find(
                            activiteit => activiteit.id === item.activiteit
                        );
                        const dag = dagActiviteit.dag.id;
                        const dagItem: any = Object.values(dagenData).find(
                            (dagData: any) => dagData.id === dag
                        );
                        dagItem.inschrijvingen++;
                    });

                    setResult({ ...response.data.result, dagenExtended: dagenData });
                    setDone(true);
                    setLoading(false);
                })
                .catch(error => {
                    navigate('/error');
                });
        }
        return (
            <Fragment>
                <MetaData />
                <AntLayout>
                    <AntLayout.Header style={{ padding: '0' }}>
                        <Header />
                    </AntLayout.Header>
                    <AntLayout.Content>
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
                                            <Icon type="pie-chart" /> Statistieken
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Icon type="profile" /> Inschrijvingen
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <Icon type="team" /> Gebruikers
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup title="Data">
                                        <Menu.Item key="4">
                                            <Icon type="project" /> Vakken
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            <Icon type="calendar" /> Dagen
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            <Icon type="schedule" /> Activiteiten
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup title="Overig">
                                        <Menu.Item key="7">
                                            <Icon type="mail" /> Inbox
                                        </Menu.Item>
                                        <Menu.Item key="8">
                                            <Icon type="tool" /> Instellingen
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu>
                            </Sider>
                            <AntLayout.Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <br />
                                {selectedItem === 1 && (
                                    <Fragment>
                                        <Row gutter={16} style={{ textAlign: 'center' }}>
                                            <Col span={12}>
                                                <Statistic
                                                    title="Gebruikers"
                                                    value={result.gebruikers}
                                                    groupSeparator="."
                                                    decimalSeparator=","
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <Statistic
                                                    title="Inschrijvingen"
                                                    value={result.inschrijvingen}
                                                    groupSeparator="."
                                                    decimalSeparator=","
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <br />
                                        <Row
                                            gutter={24}
                                            style={{
                                                textAlign: 'center',
                                                marginLeft: '60px',
                                                marginRight: '60px'
                                            }}
                                        >
                                            <Col span={12}>
                                                <h2>Verwijzing</h2>
                                                <PieChart
                                                    radius={35}
                                                    lineWidth={13}
                                                    label={(labelProps: any) =>
                                                        labelProps.data[labelProps.dataIndex].title
                                                    }
                                                    labelStyle={{
                                                        fontSize: '3px'
                                                    }}
                                                    labelPosition={120}
                                                    data={
                                                        Object.keys(result.verwijzingen).map(
                                                            (verwijzing, index) => {
                                                                const aantal =
                                                                    result.verwijzingen[verwijzing];
                                                                const color = colors[6][index];
                                                                return {
                                                                    title: verwijzing,
                                                                    value: aantal,
                                                                    color
                                                                };
                                                            }
                                                        ) as any
                                                    }
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
                                                    label={(labelProps: any) =>
                                                        labelProps.data[labelProps.dataIndex].title
                                                    }
                                                    labelStyle={{
                                                        fontSize: '3px'
                                                    }}
                                                    labelPosition={120}
                                                    data={
                                                        Object.keys(
                                                            result.inschrijvingenGemiddelde
                                                        ).map((inschrijvingen, index) => {
                                                            const aantal =
                                                                result.inschrijvingenGemiddelde[
                                                                    inschrijvingen
                                                                ];
                                                            const color = colors[21][index];
                                                            return {
                                                                title: inschrijvingen,
                                                                value: aantal,
                                                                color
                                                            };
                                                        }) as any
                                                    }
                                                    style={{
                                                        height: '400px'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row
                                            gutter={24}
                                            style={{
                                                textAlign: 'center',
                                                marginLeft: '60px',
                                                marginRight: '60px'
                                            }}
                                        >
                                            <Col span={12}>
                                                <h2>Inschrijvingen per dag</h2>
                                                <PieChart
                                                    radius={35}
                                                    lineWidth={13}
                                                    label={(labelProps: any) =>
                                                        labelProps.data[labelProps.dataIndex].title
                                                    }
                                                    labelStyle={{
                                                        fontSize: '3px'
                                                    }}
                                                    labelPosition={120}
                                                    data={
                                                        Object.keys(result.dagen).map(
                                                            (dag, index) => {
                                                                const aantal = result.dagen[dag];
                                                                const color = colors[28][index];
                                                                return {
                                                                    title: dag,
                                                                    value: aantal,
                                                                    color
                                                                };
                                                            }
                                                        ) as any
                                                    }
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
                                                    label={(labelProps: any) =>
                                                        labelProps.data[labelProps.dataIndex].title
                                                    }
                                                    labelStyle={{
                                                        fontSize: '3px'
                                                    }}
                                                    labelPosition={120}
                                                    data={
                                                        Object.keys(result.vakken).map(
                                                            (vak, index) => {
                                                                const aantal = result.vakken[vak];
                                                                const color = [
                                                                    ...colors[29],
                                                                    ...colors[30],
                                                                    ...colors[39]
                                                                ][index];
                                                                return {
                                                                    title: vak,
                                                                    value: aantal,
                                                                    color
                                                                };
                                                            }
                                                        ) as any
                                                    }
                                                    style={{
                                                        height: '400px'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Fragment>
                                )}
                                {selectedItem === 2 && (
                                    <Collapse bordered={false}>
                                        {activiteiten.map((activiteit, activiteitIndex) => (
                                            <Panel
                                                header={
                                                    activiteit.vak.naam +
                                                    ' (' +
                                                    activiteit.dag.datum +
                                                    ')'
                                                }
                                                key={activiteitIndex}
                                            >
                                                <Table
                                                    locale={{ emptyText: 'Geen inschrijvingen' }}
                                                    columns={[
                                                        {
                                                            title: 'Naam',
                                                            dataIndex: 'naam',
                                                            key: 'naam'
                                                        },
                                                        {
                                                            title: 'Geslacht',
                                                            dataIndex: 'geslacht',
                                                            key: 'geslacht'
                                                        }
                                                    ]}
                                                    dataSource={result.inschrijvingenItems
                                                        .filter(
                                                            (inschrijving: any) =>
                                                                inschrijving.activiteit ===
                                                                activiteit.id
                                                        )
                                                        .map(
                                                            (
                                                                inschrijving: any,
                                                                inschrijvingIndex
                                                            ) => {
                                                                const gebruiker: any = result.gebruikersItems.find(
                                                                    (gebruikerItem: any) =>
                                                                        gebruikerItem.email ===
                                                                        inschrijving.email
                                                                );
                                                                return {
                                                                    key: inschrijvingIndex,
                                                                    email: inschrijving.email.toLowerCase(),
                                                                    naam:
                                                                        gebruiker.roepnaam +
                                                                        ' ' +
                                                                        (gebruiker.tussenvoegsel
                                                                            ? gebruiker.tussenvoegsel +
                                                                              ' '
                                                                            : '') +
                                                                        gebruiker.achternaam,
                                                                    geslacht: gebruiker.geslacht
                                                                };
                                                            }
                                                        )
                                                        .sort((a, b) =>
                                                            a.naam.localeCompare(b.naam)
                                                        )}
                                                />
                                                <Button
                                                    type="primary"
                                                    icon="printer"
                                                    style={{ position: 'relative', bottom: '48px' }}
                                                >
                                                    Print
                                                </Button>
                                            </Panel>
                                        ))}
                                    </Collapse>
                                )}
                                {selectedItem === 3 && (
                                    <Table
                                        columns={[
                                            {
                                                title: 'E-mailadres',
                                                dataIndex: 'email',
                                                key: 'email'
                                            },
                                            {
                                                title: 'Naam',
                                                dataIndex: 'naam',
                                                key: 'naam'
                                            },
                                            {
                                                title: 'Geslacht',
                                                dataIndex: 'geslacht',
                                                key: 'geslacht'
                                            }
                                        ]}
                                        dataSource={result.gebruikersItems
                                            .map((gebruiker: any, index) => ({
                                                key: index,
                                                email: gebruiker.email.toLowerCase(),
                                                naam:
                                                    gebruiker.roepnaam +
                                                    ' ' +
                                                    (gebruiker.tussenvoegsel
                                                        ? gebruiker.tussenvoegsel + ' '
                                                        : '') +
                                                    gebruiker.achternaam,
                                                geslacht: gebruiker.geslacht
                                            }))
                                            .sort((a, b) => a.email.localeCompare(b.email))}
                                    />
                                )}
                                {selectedItem === 4 && <p>Test</p>}
                                {selectedItem === 5 && (
                                    <Fragment>
                                        <h2>Dagen</h2>
                                        <Table
                                            columns={[
                                                {
                                                    title: '#',
                                                    dataIndex: 'id',
                                                    key: 'id'
                                                },
                                                {
                                                    title: 'Datum',
                                                    dataIndex: 'datum',
                                                    key: 'datum'
                                                },
                                                {
                                                    title: 'Inschrijvingen',
                                                    dataIndex: 'inschrijvingen',
                                                    key: 'inschrijvingen'
                                                }
                                            ]}
                                            dataSource={Object.values(result.dagenExtended).map(
                                                (dag: any) => {
                                                    return {
                                                        id: dag.id,
                                                        datum: dag.datum,
                                                        inschrijvingen: (
                                                            <Progress
                                                                percent={Math.floor(
                                                                    (dag.inschrijvingen /
                                                                        dag.maxDeelnemers) *
                                                                        100
                                                                )}
                                                            />
                                                        )
                                                    };
                                                }
                                            )}
                                        />
                                    </Fragment>
                                )}
                                {selectedItem === 6 && <p>Test</p>}
                                {selectedItem === 7 && <p>Test</p>}
                                {selectedItem === 8 && (
                                    <>
                                        <h2>Instellingen</h2>
                                        <b>Inschrijvingen</b>: <Switch />
                                    </>
                                )}
                            </AntLayout.Content>
                        </AntLayout>
                    </AntLayout.Content>
                    <AntLayout.Footer style={{ padding: '0' }}>
                        <Footer />
                    </AntLayout.Footer>
                </AntLayout>
            </Fragment>
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
