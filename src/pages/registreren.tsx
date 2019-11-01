import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Row, Col, Button, Input, Result } from 'antd';
import Title from '../components/Title';

interface State {
    loading: boolean;
    done: boolean;
    email: string;
}

export default class Registreren extends Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            done: false,
            email: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleClick() {
        const { email } = this.state;
        this.setState({
            loading: true
        });
        axios.post(`https://api.hageveldexperience.nl/register`, {
            email
        }).then(response => {
            this.setState({
                loading: false,
                done: true
            });
        }).catch(error => {

        });
    }

    render() {
        const { email, loading, done } = this.state;

        return (
            <Layout>
                <Title centered={true}>Aanmelden</Title>
                <Row>
                    <Col span={12} offset={6}>
                        {!done ? (
                            <>
                            Vul hier je e-mailadres in om een account aan te maken:
                            <br /><br />
                            <Row>
                                <Col span={18}><Input disabled={loading} placeholder="mail@voorbeeld.nl" onChange={this.handleChange} value={email} /></Col>
                                <Col span={6}><Button disabled={loading} type="primary" icon="login" onClick={this.handleClick}>
                                    Verzenden
                                </Button></Col>
                            </Row>
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
    }
}