import * as React from 'react';
import { RfidUpos } from '@wynd/redux-wps-middleware';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export interface IRfidUposTagsProps {
  tags : RfidUpos.ITag[]
}

export default class RfidUposTags extends React.Component<IRfidUposTagsProps, any> {
  public render() {
    return (
      <Card>
        <Card.Header>
            <Card.Title>Open</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>gtin</th>
                <th>sgtin</th>
                <th>epc</th>
                <th>serial number</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.tags.map((tag: RfidUpos.ITag) => {
                  return (
                    <tr>
                      <td>{tag.gtin}</td>
                      <td>{tag.sgtin}</td>
                      <td>{tag.epc}</td>
                      <td>{tag.serialNumber}</td>
                      <td>action</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
