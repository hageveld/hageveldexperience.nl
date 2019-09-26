import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { Row, Col, Button, Input, Result } from 'antd';
import Title from '../components/Title';

interface State {
    loading: boolean;
    done: boolean;
}

export default class Registreren extends Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            done: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            done: true
        });
    }

    render() {
        const { loading, done } = this.state;

        return (
            <Layout>
                <Title centered={true}>Aanmelden</Title>
                <Row>
                    <Col span={12} offset={6}>
                        {!done ? (
                            <>
                            <Input placeholder="e-mailadres" />
                            <Button type="primary" icon="caret-right" size="large" onClick={this.handleClick}>
                                Verzenden
                            </Button>
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