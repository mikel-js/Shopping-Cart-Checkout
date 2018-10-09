import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap'

export default class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state= {
      open: false
    }}
    render() {
      return (
        <div>
          <Button
            className='item-details-button'
            bsStyle='link' 
            onClick={()=> this.setState({open: !this.state.open })} 
          >
          { this.state.open === false ? `See` : `Hide` } item details
          { this.state.open === false ? ` +` : ` -` } 
          </Button>
          <Collapse in={this.state.open}>
            <div>
              <Well>
                <Media>
                  <Media.Left>
                    <img
                      width={100}
                      height={100}
                      alt='thumbnail'
                      src='https://images.unsplash.com/photo-1502471735958-b502f65c9f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8dc6e2da810fb1205c0f60de74ca76c&auto=format&fit=crop&w=1164&q=80'
                      />
                  </Media.Left>
                  <Media.Body>
                    <p>Ceiling Lamps by Alvar Aalto, white</p>
                    <Row className='show-grid'>
                      <Col md={6}>
                        <strong>{`€${this.props.price.toFixed(2)}`}</strong>
                        <br />
                        <strong className='price-strike'>{`€${this.props.priceTotal.toFixed(2)}`}</strong>
                      </Col>
                      <Col md={12}>
                        <Button
                          bsStyle='success'
                          onClick={this.props.add}
                        >+</Button>
                        Qty: {this.props.qty}
                        <Button
                          bsStyle='danger'
                          onClick={this.props.subtract}
                        >-</Button>
                      </Col>
                    </Row>
                  </Media.Body>
                </Media>
              </Well>
            </div>
          </Collapse>
        </div>
      )
    }
}