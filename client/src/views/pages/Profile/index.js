import React from "react"
import { Grid, Card, Image, Icon } from "semantic-ui-react"

const ProfilePage = () =>
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card>
        <Image src="http://placehold.it/800x800" />
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className="date">
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="configure" />
            Projets
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="cube" />
            Intérêts
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={12}>
      Infos personnelles.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Grid.Column>
  </Grid>

export default ProfilePage
