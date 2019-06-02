import * as React from 'react';
import RfidUposComponent from "../components/rfidupos";

export interface IRfidUposProps {
}

export default class RfidUpos extends React.Component<IRfidUposProps, any> {
  public render() {
    return (
      <RfidUposComponent/>
    );
  }
}
