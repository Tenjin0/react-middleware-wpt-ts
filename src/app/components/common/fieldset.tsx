import * as React from "react"
import { Badge, Row } from 'reactstrap';
import { RWMEnum } from "@wynd/redux-wps-middleware";

interface IFieldsetProps {
    name: string,
    started: boolean,
    status: RWMEnum.ERequestStatus
    version?: string
}

interface IStatusProps {
    started: boolean,
}

interface IStatusRequestProps {
    status: RWMEnum.ERequestStatus | string
}

const StatusPlugin: React.SFC<IStatusProps> = (props) => {
    if (props.started) {
        return (<Badge color="success">Ready</Badge>)
    } else {
        return (<Badge color="danger">Not ready</Badge>)
    }

}

const StatusRequest: React.SFC<IStatusRequestProps> = ({ status }) => {

    switch (status) {
        case RWMEnum.ERequestStatus.NONE:
        case RWMEnum.ERequestStatus.SENT:
        case RWMEnum.ERequestStatus.RUNNING:
            return (<Badge color="primary">{status}</Badge>)
            break;
        case RWMEnum.ERequestStatus.ERROR:
            return (<Badge color="danger">{status}</Badge>)
        case RWMEnum.ERequestStatus.COMPLETED:
            return (<Badge color="primary">{status}</Badge>)
        default:
            return (<Badge color="primary">{status}</Badge>)
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
                    status: props.version || props.status
                })}
            </span>
            </h5>
        </Row>
         
        {props.children}
    </fieldset>
}

export default Fieldset