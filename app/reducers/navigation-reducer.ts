import {NavigationActionTypes} from "../actions/navigation-actions";

export default (state = {}, action) => {
    switch (action.type) {
        case NavigationActionTypes.pageChanged:
            return Object.assign({}, state, {page: action.page});
    }
    return state;
};

export const currentPageSelector = state => state.navigation.page;