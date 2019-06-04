import * as React from 'react';
import { RfidUpos, rfidUpos } from '@wynd/redux-wps-middleware';
import { Card, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export interface IRfidUposTagsProps {
  tags : RfidUpos.ITag[]
}

export default class RfidUposTags extends React.Component<IRfidUposTagsProps, any> {

  public setActionButton = (index) => {
    return (
      <Button type="button" data-index={index} onClick={this.onClick}>X</Button>
    )
  }

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    const target = e.currentTarget;
    rfidUpos.cancelItem(Number(target.dataset.index));
  }

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
                this.props.tags.map((tag: RfidUpos.ITag, index) => {
                  return (
                    <tr key={"rfidupos-tags-" + index}>
                      <td>{tag.gtin}</td>
                      <td>{tag.sgtin}</td>
                      <td>{tag.epc}</td>
                      <td>{tag.serialNumber}</td>
                      <td>{this.setActionButton(index)}</td>
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
