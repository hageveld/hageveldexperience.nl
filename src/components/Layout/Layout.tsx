import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import MetaData from '../MetaData';
import Navigation from '../Navigation';
import Footer from '../Footer';

const MenuItems = [
    {
        name: 'Home',
        path: '/',
        match: /^\/$/
    },
    {
        name: 'Hageveld algemeen',
        path: '/algemeen',
        match: /^\/coin/
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
        <Navigation items={MenuItems} />
        {children}
        <Footer />
    </Fragment>
);

export default Layout;
