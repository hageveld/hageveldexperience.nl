import React, { FunctionComponent, useEffect } from 'react';
import Layout from '../components/Layout';
import { Button, Result, Icon } from 'antd';
import { Link } from 'gatsby';
import Title from '../components/Title';
import { useSelector, useDispatch } from '../hooks';
import { logout } from '../store/auth';

import '../sass/index.scss';

const Uitloggen: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    });

    return (
        <Layout>
            <Title centered={true}>Hageveld Experience</Title>
            <br />
            {isLoggedIn ? (
                <Result
                    title="Uitloggen..."
                    subTitle="Een moment geduld alstublieft."
                    icon={<Icon type="loading" />}
                />
            ) : (
                <Result
                    status="success"
                    title="U bent succesvol uitgelogd"
                    extra={
                        <Link to="/">
                            <Button type="primary">
                                <Icon type="left" />
                                Keer terug
                            </Button>
                        </Link>
                    }
                />
            )}
        </Layout>
    );
};

export default Uitloggen;
