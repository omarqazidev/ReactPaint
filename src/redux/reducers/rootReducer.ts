import { curriedUIReducer } from './uiReducer';
import { combineReducers } from 'redux';

import { curriedComponentReducer } from './componentReducer';

const rootReducer = combineReducers({
    components: curriedComponentReducer,
    selectedComponent: curriedUIReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
