import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from 'semantic-ui-react';


const ActorCard = ({actor}) => {
    return (
            <Grid.Column>
                <Card>
                    <Card image={actor.photoUrl}
                        header={actor.name}
                        extra={actor.about}
                    />
                </Card>
            </Grid.Column>
    )
}

ActorCard.propTypes = {
    actor:PropTypes.array.isRequired
}

export default ActorCard