import React, { FunctionComponent, Component } from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import { Row, Col, Button, Input, Result, Icon, Form, Select, AutoComplete, Tooltip, Alert } from 'antd';
import { FormComponentProps  } from 'antd/lib/form';
import Title from '../components/Title';
import basisscholen from '../../../duo-bo-data/result/result.json';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

const { Option } = Select;
const { Item } = Form;
const { Step } = Stepper;
  
class Persoonsgegevens extends Component<FormComponentProps> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;
  
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '31',
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="31">+31</Option>
            </Select>,
        );
  
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Roepnaam">
                    {getFieldDecorator('roepnaam', {
                        rules: [{ required: true, message: 'Vul alsjeblieft je roepnaam in.', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('tussenvoegsel', {
                        rules: [{ whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Achternaam">
                    {getFieldDecorator('achternaam', {
                        rules: [{ required: true, message: 'Vul alsjeblieft je achternaam in.', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('geslacht', {
                        rules: [{ required: true, message: 'Vul alsjeblieft je geslacht in.' }],
                    })(
                        <Select>
                            <Option value="M">Jongen</Option>
                            <Option value="V">Meisje</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telefoonnummer&nbsp;
                            <Tooltip title="Telefoonnummer ouder/verzorger voor calamiteiten">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('telefoonnummer', {
                        rules: [],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Authenticatie extends Component<FormComponentProps> {
    state = {
        confirmDirty: false
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('wachtwoord')) {
            callback('De wachtwoorden die je hebt ingevult komen niet overeen.');
        } else {
            callback();
        }
    };
    
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['bevestig_wachtwoord'], { force: true });
        }
        callback();
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;
  
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
  
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Wachtwoord" hasFeedback>
                    {getFieldDecorator('wachtwoord', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft een wachtwoord in.'
                            },
                            {
                                validator: this.validateToNextPassword
                            }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Bevestig wachtwoord" hasFeedback>
                    {getFieldDecorator('bevestig_wachtwoord', {
                        rules: [
                            {
                                required: true,
                                message: 'Bevestig alsjeblieft je wachtwoord.'
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
  
const WrappedPersoonsgegevens = Form.create({ name: 'persoonsgegevens' })(Persoonsgegevens);
const WrappedAuthenticatie = Form.create({ name: 'authenticatie' })(Authenticatie);

const Activeer: FunctionComponent = () => {
    const hash = location.hash.replace("#/", "");

    if(!(/^[0-9a-f]{64}$/.test(hash))) {
        navigate("/");
    }

    return (
            <Layout>
                <Title centered={true}>Activeer je account</Title>
                <Row>
                    <Col span={12} offset={6}>
                        <Stepper>
                            <Step title="Gegevens" icon="user" description="Persoonsgegevens">
                                <Alert message="Door het invullen van je persoonsgegevens ga je ermee akkoord dat deze gegevens beveiligd opgeslagen en verwerkt worden." type="info" showIcon />
                                <br />
                                <WrappedPersoonsgegevens />
                            </Step>
                            <Step title="Wachtwoord" icon="lock" description="Authenticatie">
                                <WrappedAuthenticatie />
                            </Step>
                            <Step title="School" icon="bank" description="Basisschool">
                                <>
                                    <AutoComplete
                                        style={{ width: '400px' }}
                                        dataSource={(basisscholen as any).filter(basisschool => basisschool.distance < 15).map(basisschool => basisschool.naam + ' - ' + basisschool.plaats)}
                                        filterOption={(inputValue, option: any) =>
                                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                    />
                                    <Map center={[52.348391, 4.6321063]} zoom={11} height={400}>
                                        {(basisscholen as any).filter(basisschool => basisschool.distance < 15).map((basisschool, index) => 
                                            <Marker key={index} anchor={[parseFloat(basisschool.latitude), parseFloat(basisschool.longitude)]} payload={1} onClick={({ event, anchor, payload }) => {}} />
                                        )}
                                    </Map>
                                </>
                            </Step>
                            <Step title="Verwijzing" icon="search" description="Extra informatie">
                                <>
                                    <p>Hoe heb je ons gevonden?</p>
                                    <Select style={{ width: '300px' }}>
                                        <Option value="school">School</Option>
                                        <Option value="kennis">Vrienden/familie/kennis</Option>
                                        <Option value="online">Digitaal</Option>
                                        <Option value="overig">Geen van bovenstaande opties</Option>
                                    </Select>         
                                </>
                            </Step>
                            <Step title="Einde" icon="check" description="Klaar!">
                                <Result
                                    status="success"
                                    title="Succesvol geregistreerd!"
                                    subTitle="Je kunt je nu inschrijven voor de proeflessen."
                                    extra={
                                        <Link to="/inschrijven">
                                            <Button type="primary" icon="form" size="large">
                                                Inschrijven
                                            </Button>
                                        </Link>
                                    }
                                />
                            </Step>
                        </Stepper>
                    </Col>
                </Row>
            </Layout>
    );
}

export default Activeer;