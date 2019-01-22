import { combineReducers } from 'redux';

const items = (state={category: '',menuItems: []}, action) => {
    switch(action.type) {
        case 'CHECK_ITEM': 
            return {
                category: action.category,
                menuItems: action.menuItems
            }
        default:
            return state;
    }
}
const category = (state={menuCategory: []}, action) => {
    switch(action.type) {
        case 'GET_CATEGORY': 
            return {
                menuCategory: action.menuCategory
            }
        default:
            return state;
    }
}

export default combineReducers({items, category});