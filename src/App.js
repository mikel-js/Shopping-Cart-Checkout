import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'
import SubTotal from './components/Subtotal'
import PickupSavings from './components/PickUpSavings'
import TaxesFees from './components/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal'
import ItemDetails from './components/ItemDetails'
import PromoCodeDiscount from './components/PromoCodeDiscount'
import './App.css';

import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 90,
      PickupSavings: -3,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false,
      qty: 1
    }
  }

  componentDidMount =()=> {
    this.setState(
    {
      taxes: (this.state.total + this.state.PickupSavings) * .14
    },
    function(){
      this.setState({
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
      }) 
    }
    )
  }

  giveDiscountHandler=()=> {
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9,
        disablePromoButton: true
      }
      )
    }
  }

  getRealTotal =()=> {
    return this.state.total + this.state.taxes
  }

  addQty =()=>{
    this.setState({
      qty: this.state.qty + 1
    })
  }

  subtractQty =()=>{
    if(this.state.qty >= 1){
      this.setState((prevState)=>({
        qty: prevState.qty -1
      }))
    }
    
  }

  render() {
    return (
      <div className='container'>
        <Grid className='purchase-card'>
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings savings={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2) * this.state.qty} />
          <ItemDetails 
          price={this.state.estimatedTotal.toFixed(2) * this.state.qty}
            priceTotal={this.getRealTotal().toFixed(2) * this.state.qty}
            qty={this.state.qty}
            add={this.addQty}
            subtract={this.subtractQty}
          />
          <hr />
          <PromoCodeDiscount
            giveDiscount={ ()=> this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);


// 18111987 2511