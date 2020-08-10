import { IAddComponentAction, ISelectComponentAction } from './../actions/componentActions';
import { ComponentActions } from '../actions/componentActions';
import Composite from '../../structures/Composite';
import produce from 'immer';

type ComponentState = {
    mainComponent: Composite;
    selectedComponent: Composite | null;
};

const baseContainer = new Composite('container', '', {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
});

const initialState: ComponentState = {
    mainComponent: baseContainer,
    selectedComponent: null,
};

const componentReducer = (state: ComponentState = initialState, action: ComponentActions) => {
    switch (action.type) {
        case 'ADD_COMPONENT':
            addComponent(state.mainComponent, action);
            return { ...state };

        case 'SELECT_COMPONENT':
            selectComponent(state, state.mainComponent, action);
            return;
        default:
            return state;
    }
};

export const curriedComponentReducer = produce(componentReducer);

function addComponent(component: Composite, action: IAddComponentAction) {
    if (action.payload.parentId === '-1') {
        component = action.payload.component;
        return;
    }
    if (component.id === action.payload.parentId) {
        component.addChild(action.payload.component);
        return;
    }
    component.children.forEach((comp) => {
        addComponent(comp, action);
    });
}

function selectComponent(
    state: ComponentState,
    component: Composite,
    action: ISelectComponentAction
) {
    if (action.payload.componentId === '-1') {
        state.selectedComponent = null;
    }
    if (component.id === action.payload.componentId) {
        state.selectedComponent = component;
        return;
    }
    component.children.forEach((comp) => {
        selectComponent(state, comp, action);
    });
}
