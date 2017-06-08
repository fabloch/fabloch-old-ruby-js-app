import React from "react"
import { Container, Grid, List, Header, Image } from "semantic-ui-react"

const ListItem = ({icon, url, header}) =>
  <List.Item
    as={url && "a"}
    href={url}
    target="_blank"
  >
    <List.Icon name={icon} size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header>
        {header}
      </List.Header>
    </List.Content>
  </List.Item>

const Footer = () => (
  <Container fluid style={{ backgroundColor: "#A5673F", marginTop: "30px" }}>
    <Grid container columns={2} divided stackable>
      <Grid.Row color="brown" >
        <Grid.Column width={6}>
          <Header as="h3" inverted>
            La FABrique du Loch
          </Header>
          <List relaxed inverted>
            <ListItem
              icon="marker"
              url="https://goo.gl/maps/HdvNKKADSi92"
              header="8, rue Georges Clemenceau. 56400 Auray"
            />
            <ListItem icon="phone" header="02 97 58 47 04" />
            <ListItem
              icon="facebook"
              url="https://www.facebook.com/lafabriqueduloch"
              header="Facebook"
            />
            <ListItem
              icon="twitter"
              url="https://twitter.com/fabriqueduloch"
              header="Twitter"
            />
          </List>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h3" inverted>
            Un énorme merci à nos partenaires et soutiens
          </Header>
          <List horizontal size="huge" inverted>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/19abbf/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 1</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/3d85d0/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 2</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/935cda/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 3</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <List horizontal size="medium" inverted>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/19abbf/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 1</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/3d85d0/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 2</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/935cda/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 3</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src="http://via.placeholder.com/64/935cdae0b74c/ffffff?text=logo" />
              <List.Content>
                <List.Header>Partenaire 4</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid columns="1" textAlign="center">
      <Grid.Column>
        <p style={{ color: "rgba(255,255,255,.9)" }} >
          mentions légales - charte - blabla
        </p>
      </Grid.Column>
    </Grid>
  </Container>
)

export default Footer
