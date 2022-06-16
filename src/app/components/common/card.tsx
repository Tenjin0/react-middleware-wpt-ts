import * as React from "react"
import { Card, CardBody, CardHeader, CardTitle, } from 'reactstrap';

interface IFieldsetProps {
    name: string,
}

const CardApp: React.FunctionComponent<IFieldsetProps> = (props) => {
    return <Card style={{marginTop: "15px"}}>
    <CardHeader>
        <CardTitle>{props.name}</CardTitle>
    </CardHeader>
    <CardBody>
        {props.children}
    </CardBody>
    </Card>
}

export default CardApp