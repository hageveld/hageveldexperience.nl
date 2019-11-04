import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { Menu, Icon } from 'antd';
import { useDispatch, useSelector } from '../../hooks';
import { login } from '../../store/auth';

const { SubMenu } = Menu;

const Header: FunctionComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const auth = useSelector(state => state.auth.auth);

    return (
        <Menu
            onClick={() => false}
            selectedKeys={[]}
            mode="horizontal"
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="home">
                <Link to="/">
                    <Icon type="home" />
                    Hageveld Experience
                </Link>
            </Menu.Item>
                {isLoggedIn ? (
                                <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="user" />
                                        {isLoggedIn ? auth.roepnaam : "Gebruiker"}
                                    </span>
                                }
                                style={{
                                    float: 'right'
                                }}
                            >
                    <Menu.Item key="setting:1"><Link to="/inschrijven">Inschrijven</Link></Menu.Item>
                    <Menu.Item key="setting:2"><Link to="/uitloggen">Uitloggen</Link></Menu.Item>
                </SubMenu>
                ) : (
                    <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="user" />
                            {isLoggedIn ? auth.roepnaam : "Gebruiker"}
                        </span>
                    }
                    style={{
                        float: 'right'
                    }}
                >
        <Menu.Item key="setting:1"><Link to="/inloggen">Inloggen</Link></Menu.Item>
        <Menu.Item key="setting:2"><Link to="/registreren">Registreren</Link></Menu.Item>
    </SubMenu>
                )}
        </Menu>
    );
}

export default Header;
