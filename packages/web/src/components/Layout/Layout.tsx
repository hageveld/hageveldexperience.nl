import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import MetaData from '../MetaData';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { Layout as AntLayout } from 'antd';

const MenuItems = [
    {
        name: 'Home',
        path: '/',
        match: /^\/$/
    },
    {
        name: 'Hageveld algemeen',
        path: '/algemeen',
        match: /^\/algemeen/
    },
    {
        name: 'Onderwijs',
        path: '/other',
        match: /^\/other/
    },
    {
        name: 'VIA',
        path: '/via',
        match: /^\via$/
    },
    {
        name: 'Begeleiding',
        path: '/begeleiding',
        match: /^\via$/
    },
    {
        name: 'Aanmelden',
        path: '/aanmelden',
        match: /^\via$/
    },
    {
        name: 'Vacatures',
        path: '/vacatures',
        match: /^\via$/
    },
    {
        name: 'Inloggen',
        path: '/inloggen',
        match: /^\/inloggen$/
    }
];

interface Props {
    title?: string;
    children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, title }: Props) => (
    <Fragment>
        <MetaData title={title} />
        <AntLayout>
            <AntLayout.Header style={{ padding: '0' }}>
                <Navigation items={MenuItems} />
            </AntLayout.Header>
            <AntLayout.Content>{children}</AntLayout.Content>
            <AntLayout.Footer>
                <Footer />
            </AntLayout.Footer>
        </AntLayout>
    </Fragment>
);

export default Layout;
