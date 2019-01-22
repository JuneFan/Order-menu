import React, { Component } from 'react';

class MenuCategory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("mmm,",this.props.categories);
        return (
        <div className="category col-sm-12 col-lg-3 col-md-3">
            <ul>
            {
                this.props.categories.map((el) => {

                    return <li onClick={() => this.props.getItem(el.short_name)} key={el.short_name}>{`${el.name} (${el.short_name})`}</li>
                })
            }
            </ul>
        </div>
        );
    }
    }

    export default MenuCategory;