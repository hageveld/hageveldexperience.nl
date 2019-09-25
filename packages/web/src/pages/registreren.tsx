import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { Button, Input } from 'antd';
import Title from '../components/Title';

export default class Registreren extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Title centered={true}>Aanmelden</Title>
                <Input placeholder="Basic usage" />
                <Button>Verzenden</Button>
            </Layout>
        );
    }
}