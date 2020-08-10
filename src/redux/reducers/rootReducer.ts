import { combineReducers } from 'redux';
import { curriedComponentReducer } from './componentReducer';
// import { curriedUIReducer } from './uiReducer';

const rootReducer = combineReducers({
    components: curriedComponentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
