import axios from 'axios';

export const getItem = category => (dispatch) => {
    let menuItems
    axios.get(`http://davids-restaurant.herokuapp.com/menu_items.json?category=${category}`)
    .then((res) => {
        menuItems = res.data.menu_items;
        dispatch ({
            type: 'CHECK_ITEM',
            category: category,
            menuItems: menuItems
        })
    })
    .catch((err) => {
        console.log(err);
    });
}

export const getCategory = () => (dispatch) => {
    let menuCategory;
    console.log('aaaa');
    axios.get("http://davids-restaurant.herokuapp.com/categories.json")
    .then((res) => {
        menuCategory = res.data;
        console.log("action,",res.data);
        dispatch ({
            type: 'GET_CATEGORY',
            menuCategory: menuCategory
        })
    })
    .catch((err) => {
        console.log(err);
    });
}
