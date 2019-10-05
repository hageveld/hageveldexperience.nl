import React, { FunctionComponent } from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import { Row, Col, Button, Input, Result, Icon, Form, Select, AutoComplete } from 'antd';
import Title from '../components/Title';
import basisscholen from '../../../duo-bo-data/result/result.json';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

const { Option } = Select;
const { Item } = Form;
const { Step } = Stepper;

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
                                <Form>
                                    <Item label="Roepnaam">
                                        <Input />
                                    </Item>
                                    <Item label="Tussenvoegsel">
                                        <Input />
                                    </Item>
                                    <Item label="Achternaam">
                                        <Input />
                                    </Item>
                                    <Item label="Geslacht">
                                        <Select>
                                            <Option value="M">Jongen</Option>
                                            <Option value="V">Meisje</Option>
                                        </Select>
                                    </Item>
                                    <Item label="Telefoonnummer">
                                        <Input />
                                    </Item>
                                </Form>
                            </Step>
                            <Step title="Wachtwoord" icon="lock" description="Authenticatie">
                                <>
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />         
                                </>
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