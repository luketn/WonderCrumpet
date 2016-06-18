import {CrumpetActionTypes} from "../actions/crumpet-actions";
import {Crumpet} from "../data/Crumpet";

export default (state = {}, action) => {
    switch (action.type) {
        case CrumpetActionTypes.loadedCrumpets:
            return Object.assign({}, state, {list:action.crumpets});
        case CrumpetActionTypes.loadCrumpetsError:
            return Object.assign({}, state, {list:[], error: action.error});
    }
    return state;
};

export const crumpetListSelector = state => (state.crumpet.list as Crumpet[]);
export const crumpetErrorSelector = state => (state.crumpet.error);
