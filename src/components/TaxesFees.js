import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

export default class TaxesFees extends Component {
  render() {
    return (
      <Row className='show-grid'>
        <Col md={6}>Est. taxes and fees</Col>
        <Col md={6}>{`€${this.props.taxes}`}</Col>
      </Row>
    )
  }
}