import React, { Component } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import { Steps, Row, Col, Button, Input, Result, Icon, Form, Select, AutoComplete } from 'antd';
import Title from '../components/Title';
import basisscholen from '../../../duo-bo-data/result/result.json';

const boList = (basisscholen as any).map(basisschool => basisschool.naam + ' - ' + basisschool.plaats);

const { Step } = Steps;
const { Option } = Select;

const steps = [{
    title: "Gegevens",
    description: "Beschrijving",
    content: (
        <Form>
            <Form.Item label="Roepnaam">
                <Input />
            </Form.Item>
            <Form.Item label="Tussenvoegsel">
                <Input />
            </Form.Item>
            <Form.Item label="Achternaam">
                <Input />
            </Form.Item>
            <Form.Item label="Geslacht">
                <Select>
                    <Option value="M">Jongen</Option>
                    <Option value="V">Meisje</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Telefoonnummer">
                <Input />
            </Form.Item>
        </Form>
    )
}, {
    title: "Wachtwoord",
    description: "Beschrijving",
    content: (
        <>
                            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
                            
                            </>
    )
}, {
    title: "School",
    description: "Beschrijving",
    content: (
        <AutoComplete
            style={{ width: '400px' }}
            dataSource={boList}
            filterOption={(inputValue, option: any) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    )
}, {
    title: "Einde",
    description: "Beschrijving",
    content: (
        <Result
                                status="success"
                                title="Succesvol aangemeld!"
                                subTitle="Kijk in de inbox van je e-mail en klik op de activatielink"
                            />
    )
}]

interface State {
    step: number;
    hash: string;
}

export default class Activeer extends Component<{}, State> {
    constructor(props) {
        super(props);

        const hash = location.hash.replace("#/", "");
        if(!(/^[0-9a-f]{64}$/.test(hash))) {
            navigate("/");
        }

        this.state = {
            step: 0,
            hash
        };

        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
    }

    back() {
        const { step } = this.state;
        this.setState({
            step: step-1
        });
    }

    forward() {
        const { step } = this.state;
        this.setState({
            step: step+1
        });
    }

    render() {
        const { step } = this.state;

        return (
            <Layout>
                <Title centered={true}>Activeer je account</Title>
                <Row>
                    <Col span={12} offset={6}>
                        <Steps current={step}>
                            {steps.map((stepData, index) => (
                                <Step title={stepData.title} description={stepData.description} key={index} />
                            ))}
                        </Steps>
                        {steps[step].content}
                        <Button type="primary" icon="caret-right" size="large" onClick={this.forward}>
                                Verzenden
                            </Button>
                    </Col>
                </Row>
            </Layout>
        );
    }
}