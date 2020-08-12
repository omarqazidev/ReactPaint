import { UIActions } from '../actions/uiActions';
import produce from 'immer';

type UIState = {
    importModalOpen: boolean;
};

const initialState: UIState = {
    importModalOpen: false,
};

const uiReducer = (state: UIState = initialState, action: UIActions) => {
    switch (action.type) {
        case 'UPDATE_IMPORT_MODAL': {
            state.importModalOpen = action.payload.isOpen;
            return state;
        }

        default:
            return state;
    }
};

export const curriedUIReducer = produce(uiReducer);
