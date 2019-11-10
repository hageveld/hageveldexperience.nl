import React, { FunctionComponent, Fragment } from 'react';
import Layout from '../components/Layout';
import { Button, Result, Icon, Collapse } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';

import '../sass/index.scss';

const { Panel } = Collapse;

interface Props {
    location: {
        state: any;
    };
}

const Error: FunctionComponent<Props> = ({ location: { state } }) => {
    return (
        <Layout>
            <Title centered={true}>Hageveld Experience</Title>
            <Result
                status="error"
                title="Er is een onbekende fout opgetreden"
                subTitle="Indien dit probleem aanhoudt kunt u een mail sturen naar contact@hageveldexperience.nl, zodat wij het zo spoedig mogelijk kunnen oplossen."
                extra={[
                    <Fragment key="1">
                        {state && state.data && (
                            <Collapse
                                bordered={false}
                                style={{
                                    marginLeft: '10%',
                                    marginRight: '10%',
                                    marginBottom: '20px'
                                }}
                            >
                                <Panel header="Bekijk technische details" key="1">
                                    <pre style={{ textAlign: 'left' }}>
                                        {JSON.stringify(state.data, null, 4)}
                                    </pre>
                                </Panel>
                            </Collapse>
                        )}
                    </Fragment>,
                    <Link to="/" key="2">
                        <Button key="terug">
                            <Icon type="left" /> Keer terug
                        </Button>
                    </Link>,
                    <a
                        href="mailto:contact@hageveldexperience.nl?subject=Onbekende fout opgetreden&body=Omschrijf hier wat u deed toen de fout optrad"
                        key="3"
                    >
                        <Button type="primary" key="mail">
                            <Icon type="mail" /> Contact
                        </Button>
                    </a>
                ]}
            />
        </Layout>
    );
};

export default Error;
