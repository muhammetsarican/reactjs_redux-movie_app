import React from 'react'
import { Button, Icon, Card, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const extra = (movie, fetchDeleteMovie) => {
    return (
        <div className='ui-buttons'>
            <Button animated as={Link} to={`/movie/${movie._id}`}>
                <Button.Content visible>Edit</Button.Content>
                <Button.Content hidden>
                    <Icon name='edit' />
                </Button.Content>
            </Button>
            <Button animated='vertical' onClick={()=>fetchDeleteMovie(movie._id)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash' />
                </Button.Content>
            </Button>
        </div>
    );
};
const MovieCard = ({ movie, fetchDeleteMovie }) => (
    <Grid.Column>
        <Card>
            <Card image={movie.cover}
                header={movie.title}
                extra={extra(movie, fetchDeleteMovie)}
            />
        </Card>
    </Grid.Column>
)

export default MovieCard