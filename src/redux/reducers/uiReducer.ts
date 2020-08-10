import { UIActions } from '../actions/uiActions';
import produce from 'immer';

type UIState = {
    selectedComponentId: string;
};

const initialState: UIState = {
    selectedComponentId: '-1',
};

const uiReducer = (state: UIState = initialState, action: UIActions) => {
    switch (action.type) {
        case 'UPDATE__SELECTED_COMPONENT': {
            state.selectedComponentId = action.payload.componentId;
            return state;
        }

        default:
            return state;
    }
};

export const curriedUIReducer = produce(uiReducer);
