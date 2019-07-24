import React, { Component, Fragment } from 'react';

function Menu({length, menu}) {
    switch (length) {
        case 1:
            return menu[0]
        case 2:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]}</Fragment>
        case 3:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]} <br/><br/> {menu[2]}</Fragment>
        case 4:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]} <br/><br/> {menu[2]} <br/><br/> {menu[3]}</Fragment>
        case 5:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]} <br/><br/> {menu[2]} <br/><br/> {menu[3]} <br/><br/> {menu[4]}</Fragment>
        case 6:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]} <br/><br/> {menu[2]} <br/><br/> {menu[3]} <br/><br/> {menu[4]} <br/><br/> {menu[5]}</Fragment>
        case 7:
            return <Fragment>{menu[0]} <br/><br/> {menu[1]} <br/><br/> {menu[2]} <br/><br/> {menu[3]} <br/><br/> {menu[4]} <br/><br/> {menu[5]} <br/><br/> {menu[6]}</Fragment>
        default:
            return 'no records'
    }

}


function Quantity({length, quantity}) {
    switch (length) {
        case 1:
            return quantity[0]
        case 2:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]}</Fragment>
        case 3:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]} <br/><br/> {quantity[2]}</Fragment>
        case 4:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]} <br/><br/> {quantity[2]} <br/><br/> {quantity[3]}</Fragment>
        case 5:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]} <br/><br/> {quantity[2]} <br/><br/> {quantity[3]} <br/><br/> {quantity[4]}</Fragment>
        case 6:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]} <br/><br/> {quantity[2]} <br/><br/> {quantity[3]} <br/><br/> {quantity[4]} <br/><br/> {quantity[5]}</Fragment>
        case 7:
            return <Fragment>{quantity[0]} <br/><br/> {quantity[1]} <br/><br/> {quantity[2]} <br/><br/> {quantity[3]} <br/><br/> {quantity[4]} <br/><br/> {quantity[5]} <br/><br/> {quantity[6]}</Fragment>
        default:
            return 'no records'
}

}

class MenuQuantity extends Component {

    _menuOrderSeperator = () => {
        // console.log('seperating menu & order')
        const order = this.props.order
        let _menu = [], _quantity = []

        for (let i = 0; i < order.length; i++) {
            _menu[i] = order[i].menu
            _quantity[i] = order[i].quantity + ' 잔'
        }


        return [_menu, _quantity]
    }
    
    render() {
        // console.log('rendering MenuQuatity')
        // console.log(this.props)

        let seperatedMenu = this._menuOrderSeperator()[0]
        let seperatedQuantity = this._menuOrderSeperator()[1]

        return(
            <Fragment>
            <td className="menu"><Menu length = {this.props.order.length} menu = {seperatedMenu}></Menu></td>
            <td className="quantity"><Quantity length = {this.props.order.length} quantity = {seperatedQuantity}></Quantity></td>
            </Fragment>
        )
    }

}

export default MenuQuantity;