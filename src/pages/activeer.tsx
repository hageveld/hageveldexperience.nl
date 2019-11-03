import React, { FunctionComponent, Component, useState } from 'react';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import { Row, Col, Button, Input, Result, Icon, Form, Select, AutoComplete, Tooltip, Alert, Checkbox } from 'antd';
import { FormComponentProps  } from 'antd/lib/form';
import Title from '../components/Title';
import basisscholen from '../data/duo-bo-data.json';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { createHash } from 'crypto';
import { useDispatch, useSelector } from '../hooks';
import { login } from '../store/auth';

const { Option } = Select;
const { Step } = Stepper;
  
class Persoonsgegevens extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                this.props.forward();
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
                        Volgende
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Authenticatie extends Component<FormComponentProps & any> {
    state = {
        confirmDirty: false
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, wachtwoord: createHash('sha256').update(values.wachtwoord).digest('hex') });
                this.props.forward();
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
                        Volgende
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

class Volgende extends Component<any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.forward();
    };

    render() {
        const { formData} = this.props;

        return (
            <Button type="primary" htmlType="submit" disabled={!('school' in formData && (formData as any).school)} onClick={this.handleSubmit}>
                Volgende
            </Button>
        )
    }
}

class Verwijzing extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                setTimeout(() => {
                    this.props.sendData();
                    this.props.forward();
                }, 100);
            }
        });
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;
  
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2><span style={{ color: 'red'}}>*</span> Hoe heb je ons gevonden?</h2>
                <Form.Item>
                    {getFieldDecorator('verwijzing', {
                        rules: [{ required: true, message: 'Laat alsjeblieft weten hoe je ons hebt gevonden.' }],
                    })(
                        <Select>
                            <Option value="school-folder">Ik heb een folder gekregen van mijn basisschool</Option>
                            <Option value="school-leraar">Mijn leraar heeft verteld over de experience</Option>
                            <Option value="kennis">Vrienden/familie/kennis</Option>
                            <Option value="online">Digitaal (via social media of google)</Option>
                            <Option value="overig">Geen van bovenstaande opties</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Volgende
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
  
const WrappedPersoonsgegevens: any = Form.create({ name: 'persoonsgegevens' })(Persoonsgegevens);
const WrappedAuthenticatie: any = Form.create({ name: 'authenticatie' })(Authenticatie);
const WrappedVerwijzing: any = Form.create({ name: 'verwijzing' })(Verwijzing);

const scholenOpties = {};

(basisscholen as any).filter(basisschool => basisschool.distance < 15).forEach(basisschool => {
    if(!(basisschool.plaats in scholenOpties)) {
        scholenOpties[basisschool.plaats] = [];
    }
    scholenOpties[basisschool.plaats].push(basisschool);
});

const Activeer: FunctionComponent = () => {
    const hash = location.hash.replace("#/", "");

    if(!(/^[0-9a-f]{16}$/.test(hash))) {
        navigate("/");
    }

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    console.log(formData);

    const sendData = () => {
        setLoading(true);
        axios.post(`https://api.hageveldexperience.nl/activate`, {
            token: hash,
            ...formData
        }).then(response => {
            setLoading(false);
            dispatch(login({ ...formData, email: response.data.result.email }));
        }).catch(error => {
            
        });
    }

    return (
            <Layout>
                <Title centered={true}>Activeer je account</Title>
                <Row>
                    <Col span={12} offset={6}>
                        <Stepper>
                            <Step title="Gegevens" icon="user" description="Persoonsgegevens" showForward={false}>
                                <Alert message="Door het invullen van je persoonsgegevens ga je ermee akkoord dat deze gegevens beveiligd opgeslagen en verwerkt worden." type="info" showIcon />
                                <br />
                                <WrappedPersoonsgegevens formData={formData} setFormData={setFormData} />
                            </Step>
                            <Step title="Wachtwoord" icon="lock" description="Authenticatie" showForward={false}>
                                <WrappedAuthenticatie formData={formData} setFormData={setFormData} />
                            </Step>
                            <Step title="School" icon="bank" description="Basisschool" showForward={false}>
                                    <h2><span style={{ color: 'red'}}>*</span> Selecteer je bassischool</h2>
                                    <AutoComplete
                                        style={{ width: '400px' }}
                                        dataSource={Object.keys(scholenOpties).map(plaats => (
                                            <AutoComplete.OptGroup label={plaats}>
                                                {scholenOpties[plaats].map(basisschool => (
                                                    <AutoComplete.Option value={basisschool.id} naam={basisschool.naam}>
                                                        {basisschool.naam}
                                                    </AutoComplete.Option>
                                                ))}
                                            </AutoComplete.OptGroup>
                                        ))}
                                        filterOption={true}
                                        optionFilterProp="naam"
                                        placeholder="Selecteer je basisschool"
                                        onSelect={(value) => setFormData({ ...formData, school: value })}
                                    />
                                    <br /><br />
                                    <Checkbox onChange={(e) => e.target.checked ? setFormData({ ...formData, school: "000000" }) : setFormData({ ...formData, school: undefined })}>Mijn school staat hier niet bij</Checkbox>
                                    <br /><br />
                                    <Volgende formData={formData} />
                                    {/*<Map center={[52.348391, 4.6321063]} zoom={11} height={400}>
                                        {(basisscholen as any).filter(basisschool => basisschool.distance < 15).map((basisschool, index) => 
                                            <Marker key={index} anchor={[parseFloat(basisschool.latitude), parseFloat(basisschool.longitude)]} payload={1} onClick={({ event, anchor, payload }) => {
                                                console.log(basisschool.naam);
                                            }} />
                                        )}
                                    </Map>*/}
                            </Step>
                            <Step title="Verwijzing" icon="search" description="Extra informatie" showForward={false}>
                                <WrappedVerwijzing formData={formData} setFormData={setFormData} sendData={sendData} />
                            </Step>
                            <Step title="Einde" icon={loading ? "loading" : "check"} description="Klaar!">
                                {loading ? (
                                    <Result
                                        title="Registratie voltooien..."
                                        subTitle="Een moment geduld alstublieft"
                                        icon={<Icon type="loading" />}
                                    />
                                ) : (
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
                                )}
                            </Step>
                        </Stepper>
                    </Col>
                </Row>
            </Layout>
    );
}

export default Activeer;
