import * as React from "react"
import { Card, } from 'react-bootstrap';

interface IFieldsetProps {
    name: string,
}

const CardApp: React.SFC<IFieldsetProps> = (props) => {
    return <Card style={{marginTop: "15px"}}>
    <Card.Header>
        <Card.Title>{props.name}</Card.Title>
    </Card.Header>
    <Card.Body>
        {props.children}
    </Card.Body>
    </Card>
}

export default CardApp