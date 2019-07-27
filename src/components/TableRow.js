import React, { Component } from 'react';
import MenuQuantity from './MenuQuantity';
import axios from 'axios';

class TableRow extends Component {

  state = [];

  _renderMenuQuantity = () => {
    let order = this.props.order
    let key = this.props.number
    
    return <MenuQuantity
      order= {this._parseOrder(order)}
      key = {key}
      number = {key}
      />
    
  }

  _updateUI = (e) => {
    const element = e.target.parentNode;

    if (element.classList[0] === "order") {
      element.classList.toggle('done');
    }

    this.setState(this.props, () => console.log(this.state))
    this.setState({status:"c"})
    console.log(e.target.parentNode.id);

    this._patchToServer(e.target.parentNode.id)
  }

  _patchToServer = (id) => {
    axios.patch(`http://coffee-remocon-dev2.ap-northeast-2.elasticbeanstalk.com/order/${id}/`,
    {status: "c"})
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    }
    )
  }

  _parsedDate = (time) => {
    let date = time.split(".")
    let parsedDate = date[0].split("T")
    
    return parsedDate[1]
  }

  _parseOrder = (order) => {
    let splitedOrder = order.split(";")
    class Order {
      constructor (menu, quantity, key) {
        this.menu = menu;
        this.quantity = quantity;
        this.key = key;
      }
    }
    
    let orders = []
    
    for (let i = 0; i<splitedOrder.length; i++) {
      const result = splitedOrder[i].split(",");
      orders[i] = new Order(result[0], result[1], i);
    }

    // console.log(orders);

    return orders
  }

  render() {
    // console.log(this.props);
    return (
        <tr className="order" id={this.props.number} onClick={this._updateUI}>
            <td className="number"> {this.props.number} </td>
            {this._renderMenuQuantity()}
            <td className="price"> {this.props.price} 원 </td>
            <td className="time"> {this._parsedDate(this.props.time)} </td>
            <td className="status">	{this.state.status? this.state.status : this.props.status} </td>
        </tr>
    );
  }
}
  
export default TableRow;
