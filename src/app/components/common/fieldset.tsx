import * as React from "react"
import { Badge, Row } from 'reactstrap';
import { ERequestStatus } from "../../../../redux-wps-middleware/src/constants/enum";


interface IFieldsetProps {
    name: string,
    started: boolean,
    status: ERequestStatus

}

interface IStatusProps {
    started: boolean,
}

interface IStatusRequestProps {
    status: ERequestStatus
}

const StatusPlugin: React.SFC<IStatusProps> = (props) => {
    if (props.started) {
        return (<Badge color="success">Start</Badge>)
    } else {
        return (<Badge color="danger">Start</Badge>)
    }

}

const StatusRequest: React.SFC<IStatusRequestProps> = ({ status }) => {

    switch (status) {
        case ERequestStatus.NONE:
            return (<Badge color="secondary">{status}</Badge>)
        case ERequestStatus.SENT:
        case ERequestStatus.RUNNING:
            return (<Badge color="primary">{status}</Badge>)
            break;
        case ERequestStatus.ERROR:
            return (<Badge color="danger">{status}</Badge>)
        case ERequestStatus.COMPLETED:
            return (<Badge color="primary">{status}</Badge>)
        default:
            return (<Badge color="secondary">{status}</Badge>)
    }

}

const Fieldset: React.SFC<IFieldsetProps> = (props) => {
    return <fieldset className="scheduler-border" style={{position: "relative"}}>
        <legend className="scheduler-border">
            {props.name}:
         </legend>
         <Row style={{position: "absolute",
                     top: "0%",
                    right: "7%"}} >
            <h5>
            <span>
                {StatusPlugin({
                    started: props.started
                })}
            </span>
            <span>
                {StatusRequest({
                    status: props.status
                })}
            </span>
            </h5>
        </Row>
         
        {props.children}
    </fieldset>
}

export default Fieldset