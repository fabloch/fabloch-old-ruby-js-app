import React from "react"
import PropTypes from "prop-types"
import { Card, Image, Icon } from "semantic-ui-react"

const PublicCard = ({
  username,
  firstname,
  lastname,
  description,
  imgsmall,
}) => (
  <Card>
    <Image src={imgsmall} fluid />
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
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  description: PropTypes.string,
  imgsmall: PropTypes.string,
}

PublicCard.defaultProps = {
  firstname: "",
  lastname: "",
  description: "",
  imgsmall: "",
}

export default PublicCard
