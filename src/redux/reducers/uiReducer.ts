import { UIActions } from '../actions/uiActions';
import produce from 'immer';

type UIState = {
    importModalOpen: boolean;
    projectJson: string;
};

const initialState: UIState = {
    importModalOpen: false,
    projectJson: '',
};

const uiReducer = (state: UIState = initialState, action: UIActions) => {
    switch (action.type) {
        case 'UPDATE_IMPORT_MODAL': {
            state.importModalOpen = action.payload.isOpen;
            if (action.payload.projectJson) {
                state.projectJson = action.payload.projectJson;
            }
            return state;
        }

        default:
            return state;
    }
};

export const curriedUIReducer = produce(uiReducer);
