import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col, Button, Avatar, Statistic, Divider, Popconfirm, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from '../../hooks';
import { inschrijf, uitgeschreven } from '../../store/inschrijving';

interface Props {
    //icon: IconName;
    vak: any;
    dag: any;
    inschrijvingen: number; // maximale inschrijvingen (!)
    deelnemers: number; // huidige inschrijvingen
}

const Activiteit: FunctionComponent<Props> = ({ vak: { icon, naam }, dag: { datum }, inschrijvingen, deelnemers }) => {
    const ingeschreven = useSelector(state => state.inschrijf.ingeschreven);
    const dispatch = useDispatch();

    const toggleSchrijfIn = () => {
        if(ingeschreven) {
            dispatch(uitgeschreven());
            message.error('Succesvol uitgeschreven');
        } else {
            dispatch(inschrijf());
            message.success('Succesvol ingeschreven!');
        }
    };

    return (
        <Fragment>
                <Row gutter={12}>
                    <Col span={3}>
                        <Avatar>
                            <FontAwesomeIcon icon={['fas', icon]} />
                        </Avatar>
                    </Col>
                    <Col span={3}>
                        {naam}
                    </Col>
                    <Col span={2} style={{ float: 'right' }}>
                        <Popconfirm
                            title={ingeschreven ? "Weet je zeker dat je je uit wilt schrijven?" : (
                                <Fragment>
                                    <p>Weet je zeker dat je je in wilt schrijven?</p>
                                    <p>
                                        <b>Vak</b>: {naam}
                                        <br />
                                        <b>Datum</b>: {datum}
                                        <br />
                                        <b>Tijd</b>: 14:00 - 15:30
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
                                icon={ingeschreven ? "check" : "plus"}
                                disabled={inschrijvingen >= deelnemers}
                                style={ingeschreven ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                            />
                        </Popconfirm>
                    </Col>
                    <Col span={6} style={{ float: 'right' }}>
                        <Statistic
                            title="Inschrijvingen"
                            value={ingeschreven ? inschrijvingen+1 : inschrijvingen}
                            suffix={`/ ${deelnemers}`}
                        />
                    </Col>
                </Row>
                <Divider style={{ margin: '15px' }} />
            </Fragment>
    );
}

export default Activiteit;