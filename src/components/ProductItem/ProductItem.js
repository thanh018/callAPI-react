import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

  onDelete_ = (id) => {
    if(confirm('Are you sure you want to delete')) { // eslint-disable-line
      this.props.onDeleteFunc(id);
    }
  }

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'Available' : 'Not Available';
    var statusClass = product.status ? 'success' : 'warning';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link 
            to={`/product/${product.id}/edit`} 
            type="button"
            className="btn btn-success"
            >Edit</Link>
          <button
            type="button"
            className="btn btn-danger margin-left-10"
            onClick = { () => this.onDelete_(product.id) }
          >Remove</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
