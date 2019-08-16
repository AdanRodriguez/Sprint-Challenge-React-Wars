import React from 'react';
import {Card} from 'semantic-ui-react';
import './StarWars.scss';
import styled from 'styled-components';

const Title = styled.h2`
color:#ff1313
text-shadow: 1px 1px 3px #000000`

const Birth = styled.p`
color: #006432`



const StarWars = (props) => {
    console.log(props);
    return(
        <Card id="star">
            <Card.Content>
                <Title>Name:{props.name}</Title>
                <Birth>Age:{props.age}</Birth>
                <p>Height:{props.height}</p>
                <p>Mass:{props.mass}</p>
                <p>Hair Color:{props.hair}</p>
                <p>Eye Color:{props.eye}</p>
                <p>Gender:{props.gender}</p>
            </Card.Content>
        </Card>

    );
}

export default StarWars;