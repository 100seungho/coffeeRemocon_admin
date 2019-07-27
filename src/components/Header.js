import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    return (
        <tr className="header">
            <th>주문번호</th>
            <th>메뉴</th>
            <th>수량</th>
            <th>가격(₩)</th>
            <th>주문시간</th>
            <th>주문상태</th>
        </tr>
    );
  }
}
  
export default Header;
