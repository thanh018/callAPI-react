import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
        <div className="panel panel-primary margin-top-30">
          <div className="panel-heading">
            <h3 className="panel-title">List Product</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.children}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default ProductList;
