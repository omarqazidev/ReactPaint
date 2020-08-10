import { UIActions } from './actions/uiActions';
import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../redux/reducers/rootReducer';
import { ComponentActions } from './actions/componentActions';

export function useComponent() {
    const { mainComponent } = useSelector((state: AppState) => state.components);
    const selectedComponent = useSelector((state: AppState) => state.components?.selectedComponent);
    const componentDispatch = useDispatch<Dispatch<ComponentActions>>();
    return { mainComponent, componentDispatch, selectedComponent };
}

export function useUI() {
    const { selectedComponentId } = useSelector((state: AppState) => state.selectedComponent);
    const UIDispatch = useDispatch<Dispatch<UIActions>>();
    return { selectedComponentId, UIDispatch };
}
