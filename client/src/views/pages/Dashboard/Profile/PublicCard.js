import React from "react"
import PropTypes from "prop-types"
import { Card, Image, Icon } from "semantic-ui-react"

const PublicCard = ({
  username,
  firstname,
  lastname,
  description,
  imgSmall,
}) => (
  <Card>
    <Image src={imgSmall} fluid />
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

PublicCard.propTypes = {
  username: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  description: PropTypes.string,
  imgSmall: PropTypes.string,
}

PublicCard.defaultProps = {
  username: "",
  firstname: "",
  lastname: "",
  description: "",
  imgSmall: "",
}

export default PublicCard
