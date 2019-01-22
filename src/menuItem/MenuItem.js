import React, { Component } from 'react';
import { connect } from 'react-redux';
class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      
    console.log("items,", this.props);
      var show = this.props.items.length ===0 ? 'hidden' : '';
      
    return (
      <div className={`item col-sm-12 col-lg-9 col-md-9 ${show}`}>
      <table>
          <tbody>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
        {this.props.items.map(el =>
            <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.description}</td>
            </tr>
        )}
        </tbody>
        </table>
      </div>
    );
  }
}

export default MenuItem;