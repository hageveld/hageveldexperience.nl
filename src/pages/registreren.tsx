import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Link, navigate } from 'gatsby';
import { Row, Col, Button, Input, Result } from 'antd';
import { connect } from 'react-redux';
import Title from '../components/Title';

interface Props {
    isLoggedIn: boolean;
}

interface State {
    loading: boolean;
    done: boolean;
    email: string;
}

class Registreren extends Component<Props, State> {
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
            navigate("/error");
        });
    }

    render() {
        const { isLoggedIn } = this.props;
        if(isLoggedIn) {
            navigate("/inschrijven");
        }

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
                            <br />
                            <p>Klik <Link to="/inloggen"><b>hier</b></Link> indien je al een account hebt, en wilt inloggen.</p>
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

const mapStateToProps = state => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  };
  
  export default connect(mapStateToProps)(Registreren);