import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleSidebar } from '../../store';
import { Container, Menu, Image } from 'semantic-ui-react';
import { MenuProps } from '../Menu';
import { StaticQuery, graphql } from 'gatsby';
interface HeaderMenuProps extends MenuProps {
    dispatch?: Dispatch<any>;
    inverted?: boolean;
}

export const HeaderMenu = ({
    items,
    pathname,
    Link,
    inverted,
    dispatch,
}: HeaderMenuProps) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    headerQuery: file(
                        relativePath: { eq: "media/Crossplatform_Web.png" }
                    ) {
                        publicURL
                        childImageSharp {
                            fixed(width: 70, height: 70) {
                                tracedSVG
                                base64
                                aspectRatio
                                width
                                height
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                            }
                        }
                    }
                }
            `}
            render={(data: any) => (
                <Container>
                    <Menu size="large" pointing secondary inverted={inverted}>
                        <Menu.Item
                            as="a"
                            className="mobile only"
                            icon="sidebar"
                            onClick={() =>
                                dispatch && dispatch(toggleSidebar())
                            }
                        />
                        <Menu.Item as="a" className="mobile hidden">
                            <Image
                                src={data.headerQuery.publicURL}
                                size="mini"
                            />
                        </Menu.Item>
                        {/* TODO REMOVE */}
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
            )}
        />
    );
};

export default connect()(HeaderMenu);
