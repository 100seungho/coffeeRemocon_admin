import React, { Component} from 'react';
import './App.css';
import TableRow from './components/TableRow';
import Header from './components/Header';
import axios from 'axios';


class App extends Component {

  state = {}

  componentDidMount(){
    console.log('component has mounted')
    /*
    this.interval = setInterval(() => {
      this._getOrders()
    }, 1000);
    */
   this._getOrders()
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  _renderOrders = () => {
    const orders = this.state.orders.map((order) => {
      // console.log(order)
      return <TableRow
        number = {order.id}
        order = {order.order}
        price = {order.price}
        time = {order.created_at}
        key = {order.id}
      />
    })
    return orders
  }

  _getOrders =  () => {
    console.log('try to get orders')
    this._callApi()

    // this.setState({orders},()=>{console.log(this.state)})

  }

  _callApi = () => {
    axios.get('http://127.0.0.1:8000/order/?format=json')
    .then(result => {
      this._giveOrderId(result)
      console.log('called Api')
      this.setState({orders:result.data})

    })
    .catch(error => {
        console.log(error)
    });
  }

  _giveOrderId = result => {
    for(let i = 0; i < result.data.length; i++){
      result.data[i].id = i;
    }
  }
  
  
  render() {
    return (
      <table>
        <tbody>
          <Header/>
          {this.state.orders ? this._renderOrders() : <tr> loading </tr>}
        </tbody>
      </table>
    );
  }
}
  
export default App;
