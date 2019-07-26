import React, { Component } from 'react';
import MenuQuantity from './MenuQuantity';

class TableRow extends Component {

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
    console.log(e.target.parentNode.id);
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
        <tr className="order" id={this.props.number + 1} onClick={this._updateUI}>
            {/* <td className="number"> {this.props.number + 1} </td> */}
            <td className="time"> {this._parsedDate(this.props.time)} </td>
            {this._renderMenuQuantity()}
            <td className="price"> {this.props.price} 원 </td>
            <td className="status">	&#10004;</td>
        </tr>
    );
  }
}
  
export default TableRow;
