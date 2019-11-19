import React, { FunctionComponent, Component } from 'react';
import Layout from '../components/Layout';
import { Button, Icon, Row, Col, Form, Select, Input, Tooltip } from 'antd';
import { navigate } from 'gatsby';
import { FormComponentProps } from 'antd/lib/form';
import Title from '../components/Title';
import { useSelector } from '../hooks';

import '../sass/index.scss';

const { Option } = Select;

class AccountForm extends Component<FormComponentProps & any> {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.setFormData({ ...this.props.formData, ...values });
                this.props.forward();
            }
        });
    };

    componentDidMount() {
        const {
            roepnaam,
            tussenvoegsel,
            achternaam,
            geslacht,
            prefix,
            telefoonnummer
        } = this.props.user;
        const { setFieldsValue } = this.props.form;

        setFieldsValue({
            roepnaam,
            tussenvoegsel,
            achternaam,
            geslacht,
            prefix,
            telefoonnummer
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '31'
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="31">+31</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Roepnaam">
                    {getFieldDecorator('roepnaam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je roepnaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Tussenvoegsel">
                    {getFieldDecorator('tussenvoegsel', {
                        rules: [{ whitespace: true }]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Achternaam">
                    {getFieldDecorator('achternaam', {
                        rules: [
                            {
                                required: true,
                                message: 'Vul alsjeblieft je achternaam in.',
                                whitespace: true
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Geslacht">
                    {getFieldDecorator('geslacht', {
                        rules: [{ required: true, message: 'Vul alsjeblieft je geslacht in.' }]
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
                        rules: []
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Opslaan
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedAccountForm: any = Form.create({ name: 'account' })(AccountForm);

const Account: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);

    if (!isLoggedIn) {
        navigate('/inloggen');
    }

    return (
        <Layout>
            <Title centered={true}>Account</Title>
            <Row>
                <Col span={12} offset={6}>
                    <WrappedAccountForm user={auth} />
                </Col>
            </Row>
        </Layout>
    );
};

export default Account;
