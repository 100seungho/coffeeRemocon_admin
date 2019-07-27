import React, { Component} from 'react';
import './App.css';
import TableRow from './components/TableRow';
import Header from './components/Header';
import axios from 'axios';


class App extends Component {

  state = {}

  componentDidMount(){
    console.log('component has mounted')
    
    this.interval = setInterval(() => {
      this._getOrders()
    }, 5000);
    
  //  this._getOrders()
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
        status = {order.status}
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
    // axios.get('http://127.0.0.1:8000/order/?format=json')
    axios.get('http://coffee-remocon-dev2.ap-northeast-2.elasticbeanstalk.com/order/')
    // axios.get('http://ec2-13-125-149-154.ap-northeast-2.compute.amazonaws.com:8000/order/')
    .then(result => {
      // this._giveOrderId(result)
      console.log('called Api')
      this.setState({orders:result.data.reverse()})

    })
    .catch(error => {
        console.log(error)
    });
  }

  _giveOrderId = result => {
    const orders = result.data.reverse();
    for(let i = 0; i < orders.length; i++){
      orders[i].id = i;
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
