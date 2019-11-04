import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import { Button, Result, Icon } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';

import '../sass/index.scss';

const Index: FunctionComponent = () => {
    return (
        <Layout>
            <Title centered={true}>Hageveld Experience</Title>
            <Result
    status="error"
    title="Er is een onbekende fout opgetreden"
    subTitle="Indien dit probleem aanhoudt kunt u een mail sturen naar contact@hageveldexperience.nl, zodat wij het zo spoedig mogelijk kunnen oplossen."
    extra={[
        <Link to="/">
            <Button key="terug">
                <Icon type="left" /> Keer terug
            </Button>
        </Link>,
        <a href="mailto:contact@hageveldexperience.nl?subject=Onbekende fout opgetreden&body=Omschrijf hier wat u deed toen de fout optrad">
            <Button type="primary" key="mail">
                <Icon type="mail" /> Contact
            </Button>
        </a>
    ]}
  >
  </Result>
        </Layout>
    );
};

export default Index;
