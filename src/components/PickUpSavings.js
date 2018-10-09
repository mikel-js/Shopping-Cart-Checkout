import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'

var styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
}

export default class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id='tooltip'>
        <p>Delivery costs you a little, picking up save you a few bucks</p>
      </Tooltip>
    )
    return (
      <Row className='show-grid'>
        <Col md={6}>
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <div style={styles.pickupSavings}>PickUp Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`€${this.props.savings}`}
        </Col>
      </Row>
    )
  }
}