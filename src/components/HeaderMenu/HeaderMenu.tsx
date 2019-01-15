import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleSidebar } from '../../store';
import { Container, Menu, Image } from 'semantic-ui-react';
import { MenuProps } from '../Menu';
interface HeaderMenuProps extends MenuProps {
    dispatch?: Dispatch<any>;
    inverted?: boolean;
    data: any;
}

export const HeaderMenu = ({
    items,
    pathname,
    Link,
    inverted,
    dispatch,
    data,
}: HeaderMenuProps) => {
    console.log(data);
    return (
        <Container>
            <Menu size="large" pointing secondary inverted={inverted}>
                <Menu.Item
                    as="a"
                    className="mobile only"
                    icon="sidebar"
                    onClick={() => dispatch && dispatch(toggleSidebar())}
                />
                <Menu.Item as="a" className="mobile hidden">
                    <Image src={data.headerQuery.publicURL} size="mini" />
                </Menu.Item>
                {/* TODO REMOVE FILTER */}
                {items
                    .filter(item => item.name == 'Home')
                    .map(item => {
                        const active = item.exact
                            ? pathname === item.path
                            : pathname.startsWith(item.path);
                        return (
                            <Menu.Item
                                as={Link}
                                className="mobile hidden"
                                name={item.name}
                                to={item.path}
                                key={item.path}
                                active={active}
                            />
                        );
                    })}
            </Menu>
        </Container>
    );
};

export default connect()(HeaderMenu);
