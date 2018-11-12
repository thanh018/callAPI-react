import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    };
  }

  componentDidMount() {
    var {match} = this.props;
    if(match) {
      var id = match.params.id;
      console.log(id);
      callApi(`products/${id}`, 'GET', null).then((res)=> {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      });
    }
  }

  onChange = (e) => {
    var target = e.target,
      name = target.name,
      value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value
      });
  }
  
  onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus, id } = this.state;
    var {history} = this.props;
    if(id){
      callApi(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(() => {
        history.push('/products');
      });
    }else{
      callApi('products', 'POST', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(() => {
        history.push('/products');
      });
    }
  }

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name='txtName'
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name='txtPrice'
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
          </div>
          
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name='chkbStatus'
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Available
            </label>
          </div>
          
          <Link to='/productlist' className="btn btn-danger">Back Product List</Link>
          <button type="submit" className="btn btn-primary margin-left-10">SAVE</button>
        </form>
      </div>
    )
  }
}

export default ProductActionPage;
