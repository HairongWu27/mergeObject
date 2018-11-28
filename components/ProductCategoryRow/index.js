/*
import React, { Component } from 'react';
export default class ProductCategoryRow extends Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }
*/
import React from 'react';
let ProductCategoryRow = function (props) {
    return (
        <tr>
          <th colSpan="2">
            {props.category}
          </th>
        </tr>
      );
};
 
export default ProductCategoryRow;