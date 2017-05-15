import React from "react"
import PropTypes from "prop-types"
import { Card, Image, Icon } from "semantic-ui-react"

const PublicCard = ({username, firstname, lastname, description}) => (
  <Card>
    <Image src="http://placehold.it/800x800" />
    <Card.Content>
      <Card.Header>
        {username}
      </Card.Header>
      <Card.Meta>
        <span className="date">
          {firstname} {lastname}
        </span>
      </Card.Meta>
      <Card.Description>
        {description}
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
)

export default PublicCard
