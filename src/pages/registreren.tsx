import React, { FunctionComponent, useState } from 'react';
import Layout from '../components/Layout';
import { Link, navigate, navigateTo } from 'gatsby';
import { Row, Col, Input, Result, Icon } from 'antd';
import { useSelector } from '../hooks';
import { register } from '../utils/api';
import Title from '../components/Title';
import { locked } from '../data';

const { Search } = Input;

const Registreren: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    if (locked) {
        navigateTo('/onderhoud');
    }

    if (isLoggedIn) {
        navigate('/inschrijven');
    }

    const registerEmail = async (email: string) => {
        setLoading(true);
        await register(email);
        setDone(true);
        setLoading(false);
    };

    return (
        <Layout>
            <Title centered={true}>Aanmelden</Title>
            <Row>
                <Col span={12} offset={6}>
                    {!done ? (
                        <>
                            Vul hier je e-mailadres in om een account aan te maken:
                            <br />
                            <br />
                            <Search
                                placeholder="mail@voorbeeld.nl"
                                enterButton={
                                    <>
                                        <Icon type="login" /> Verzenden
                                    </>
                                }
                                disabled={loading}
                                onSearch={email => registerEmail(email)}
                            />
                            <br />
                            <br />
                            <p>
                                Klik{' '}
                                <Link to="/inloggen">
                                    <b>hier</b>
                                </Link>{' '}
                                indien je al een account hebt, en wilt inloggen.
                            </p>
                        </>
                    ) : (
                        <Result
                            status="success"
                            title="Succesvol aangemeld!"
                            subTitle="Kijk in de inbox van je e-mail en klik op de activatielink"
                        />
                    )}
                </Col>
            </Row>
        </Layout>
    );
};

export default Registreren;
