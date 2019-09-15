import React, { FunctionComponent } from 'react';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { UnderlineNav } from '@primer/components';

const Link = styled(UnderlineNav.Link)`
    cursor: pointer;
`;

interface MenuItem {
    name: string;
    path: string;
    match: RegExp;
}

interface Props {
    items: MenuItem[];
}

const Navigation: FunctionComponent<Props> = ({ items }: Props) => (
    <Location>
        {({ location }) => (
            <UnderlineNav>
                {items.map((item: MenuItem, n: number) => (
                    <Link
                        key={n}
                        onClick={() => navigate(item.path)}
                        className={item.match.test(location.pathname) ? 'selected' : ''}
                    >
                        {item.name}
                    </Link>
                ))}
            </UnderlineNav>
        )}
    </Location>
);

export default Navigation;
