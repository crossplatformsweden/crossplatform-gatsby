import * as React from 'react';
import { Link, StaticQuery } from 'gatsby';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { withLayout, LayoutProps, menuItems } from '../components/Layout';
import {
    Button,
    Segment,
    Container,
    Grid,
    Header,
    Icon,
    List,
} from 'semantic-ui-react';

const IndexPage = (props: LayoutProps) => (
    <StaticQuery
        query={query}
        render={(data: any) => (
            <div>
                {/* Master head */}
                <Segment
                    vertical
                    inverted
                    textAlign="center"
                    className="masthead"
                >
                    <HeaderMenu
                        Link={Link}
                        pathname={props.location.pathname}
                        items={menuItems}
                        inverted
                        data={data}
                    />
                    <Container text>
                        <Header inverted as="h1">
                            Crossplatform
                        </Header>
                        <Header inverted as="h2">
                            Mobile Development
                        </Header>
                        <Button
                            primary
                            size="huge"
                            href={'mailto:info@crossplatform.se'}
                        >
                            Contact us!
                        </Button>
                    </Container>
                </Segment>

                {/* About this starter */}
                <Segment vertical className="stripe">
                    <Grid
                        stackable
                        verticalAlign="middle"
                        className="container"
                    >
                        <Grid.Row>
                            <Grid.Column width="8">
                                <Header>Utveckling</Header>
                                <p>
                                    Vi kan hjälpa dig att utveckla din app! Har
                                    du en idé du vill förverkliga? Eller en
                                    gammal app som behöver förnyas? Kontakt oss!
                                </p>
                                <Header>Design</Header>
                                <p>
                                    Vi har erfarenheten som krävs för att göra
                                    prototyper av dina idéer. Vi använder
                                    verktyg som Balsamiq-Moqup för att göra
                                    lo-fi prototypes. Samt Sketch för att göra
                                    hi-fi prototyper. Vi följer standardiserade
                                    design principer för respektive platform för
                                    att ge användarna en bra uplevelse!
                                </p>
                            </Grid.Column>
                            <Grid.Column width="6" floated="right">
                                {/* TODO replace with a pretty GIF */}
                                <Header>Konsulting</Header>
                                <p>
                                    Vi kan hjälpa dig å ditt team att komma
                                    igång med mobilutveckling. Vi har erfarenhet
                                    från flera av sveriges största koncerner,
                                    och kunskapen och drivet från att jobba med
                                    startups. Hör av dig så berättar vi mer!
                                </p>
                                <Header>Utbildning</Header>
                                <p>
                                    Söker du någon som kan driva workshop?
                                    Föreläsa? Eller hjälpa en student i
                                    examensarbete/praktik? Vi har jobbar med
                                    folkhögskolor i Stockholm, driver meetups
                                    m.m!
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* Key features */}
                <Segment vertical className="stripe alternate feature">
                    <Grid
                        columns="3"
                        textAlign="center"
                        divided
                        relaxed
                        stackable
                        stretched
                        container
                        className="container"
                    >
                        <Grid.Row>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="mobile" />
                                    MOBIL MULTIPLATTFORM
                                </Header>

                                <List bulleted>
                                    <List.Item>
                                        iOS och Android samtidigt
                                    </List.Item>
                                    <List.Item>Ingen duplicerad kod</List.Item>
                                    <List.Item>Högre kvalité</List.Item>
                                    <List.Item>Snabb leverans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="cogs" />
                                    KONVERTERING AV APPAR
                                </Header>
                                <List bulleted>
                                    <List.Item>
                                        Modernisera gamla projekt
                                    </List.Item>
                                    <List.Item>
                                        iOS app till Android, Android för iOS
                                    </List.Item>
                                    <List.Item>
                                        Skapa bättre hållbarhet
                                    </List.Item>
                                    <List.Item>
                                        Webb för mobil, mobil för webb
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="server" />
                                    Backend
                                </Header>
                                <List bulleted>
                                    <List.Item>
                                        App och webb kan dela affärslogik
                                    </List.Item>
                                    <List.Item>Senaste teknologierna</List.Item>
                                    <List.Item>Push notiser till app</List.Item>
                                    <List.Item>
                                        Offline synkronisering till app
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="desktop" />
                                    Webbutveckling
                                </Header>

                                <List bulleted>
                                    <List.Item>
                                        Anpassad för dator och mobil
                                    </List.Item>
                                    <List.Item>Dela kod med app</List.Item>
                                    <List.Item>Hög kvalité</List.Item>
                                    <List.Item>Snabb leverans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="chart line" />
                                    Projectledning
                                </Header>
                                <List bulleted>
                                    <List.Item>
                                        Agil ledning av era projekt och team
                                    </List.Item>
                                    <List.Item>
                                        Estimering av er backlog
                                    </List.Item>
                                    <List.Item>DevOps, CI, CD, Scrum</List.Item>
                                    <List.Item>
                                        TDD - Test Driven Development
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name="trophy" />
                                    Utbildning
                                </Header>
                                <List bulleted>
                                    <List.Item>Workshops</List.Item>
                                    <List.Item>Praktikplatser</List.Item>
                                    <List.Item>Kurser</List.Item>
                                    <List.Item>
                                        JavaScript, .Net C#, Xamarin, React
                                        Native
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )}
    />
);

export default withLayout(IndexPage);
export const query = graphql`
    query {
        headerQuery: file(relativePath: { eq: "media/Crossplatform_Web.png" }) {
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
`;
