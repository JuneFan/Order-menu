import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem, getCategory } from './action';
import MenuItem from './menuItem/MenuItem';
import MenuCategory from './menucategory/MenuCategory';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategory();
}

  render() {
    return (
      <div className="App">
            <h1>menu</h1>
            <div className="row">
              <MenuCategory getItem={this.props.getItem} categories = {this.props.categories}/>
              <MenuItem items={this.props.items} />
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {category: state.items.category, items: state.items.menuItems, categories: state.category.menuCategory}};

const mapDispatchToProps = (dispatch)=> ({
    getItem: (category)=> dispatch(getItem(category)),
    getCategory: () => dispatch(getCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
