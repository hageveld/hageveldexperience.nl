import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col, Button, Avatar, Statistic, Divider, Popconfirm, message } from 'antd';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from '../../hooks';
import { inschrijf, uitschrijf } from '../../store/inschrijving';
import ActiviteitType from '../../classes/activiteit';
import axios from 'axios';

interface Props {
    data: ActiviteitType;
    api: any;
}

const Activiteit: FunctionComponent<Props> = ({ data: { id, vak, dag, maxDeelnemers }, api }) => {
    const inschrijvingen = 0;
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);
    const ingeschreven = useSelector(state => state.inschrijf[id]);
    const dagLocked = useSelector(state => state.inschrijf[`DAG-${dag.id}`]);
    const dagenIngeschreven = useSelector(state => state.inschrijf.DAGEN);
    const dispatch = useDispatch();

    const toggleSchrijfIn = () => {
        if(isLoggedIn) {
            if(ingeschreven) {
                dispatch(uitschrijf(id, dag.id));
                message.error('Succesvol uitgeschreven');
                axios.post("https://api.hageveldexperience.nl/activity", {
                    email: auth.email,
                    wachtwoord: auth.wachtwoord,
                    type: "uitschrijving",
                    id: id.toString()
                }).catch(error => {
                    navigate("/error");
                });
            } else {
                dispatch(inschrijf(id, dag.id));
                message.success('Succesvol ingeschreven!');
                axios.post("https://api.hageveldexperience.nl/activity", {
                    email: auth.email,
                    wachtwoord: auth.wachtwoord,
                    type: "inschrijving",
                    id: id.toString()
                }).catch(error => {
                    navigate("/error");
                });
            }
        }
    };

    console.log(api);

    return (
        <Fragment>
                <Row gutter={12}>
                    <Col span={3}>
                        <Avatar style={{ backgroundColor: '#FA9B3D' }}>
                            <FontAwesomeIcon icon={['fas', vak.icon]} />
                        </Avatar>
                    </Col>
                    <Col span={3}>
                        {vak.naam}
                    </Col>
                    <Col span={2} style={{ float: 'right' }}>
                        {!(!isLoggedIn || (!ingeschreven && (!!dagLocked || inschrijvingen >= maxDeelnemers || dagenIngeschreven >= 2))) ? (
                        <Popconfirm
                            title={ingeschreven ? "Weet je zeker dat je je uit wilt schrijven?" : (
                                <Fragment>
                                    <p>Weet je zeker dat je je in wilt schrijven?</p>
                                    <p>
                                        <b>Vak</b>: {vak.naam}
                                        <br />
                                        <b>Datum</b>: {dag.datum}
                                        <br />
                                        <b>Tijd</b>: {dag.startTijd} - {dag.eindTijd}
                                    </p>
                                    <p>Je krijgt een bevestigingsmail.</p>
                                </Fragment>
                            )}
                            onConfirm={toggleSchrijfIn}
                            okText="Ja"
                            cancelText="Nee"
                        >
                            <Button
                                type="primary"
                                shape="circle"
                                icon={(isLoggedIn && ingeschreven) ? "check" : "plus"}
                                disabled={!isLoggedIn || (!ingeschreven && (!!dagLocked || inschrijvingen >= maxDeelnemers || dagenIngeschreven >= 2))}
                                style={(isLoggedIn && ingeschreven) ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                            />
                        </Popconfirm>
                        ) : (
<Button
                                type="primary"
                                shape="circle"
                                icon={(isLoggedIn && ingeschreven) ? "check" : "plus"}
                                disabled={!isLoggedIn || (!ingeschreven && (!!dagLocked || inschrijvingen >= maxDeelnemers || dagenIngeschreven >= 2))}
                                style={(isLoggedIn && ingeschreven) ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                            />
                        )}
                    </Col>
                    <Col span={6} style={{ float: 'right' }}>
                        <Statistic
                            title="Inschrijvingen"
                            value={api ? ((isLoggedIn && ingeschreven) ? parseInt(api.deelnemers)+1 : api.deelnemers) : '0'}
                            suffix={`/ ${maxDeelnemers}`}
                        />
                    </Col>
                </Row>
                <Divider style={{ margin: '15px' }} />
            </Fragment>
    );
}

export default Activiteit;