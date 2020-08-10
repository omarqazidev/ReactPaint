import {
    IAddComponentAction,
    ISelectComponentAction,
    IUpdateCssAction,
    IUpdateClassesAction,
    IDeleteComponentAction,
} from './../actions/componentActions';
import { ComponentActions } from '../actions/componentActions';
import Composite from '../../structures/Composite';
import produce from 'immer';

type ComponentState = {
    mainComponent: Composite;
    selectedComponent: Composite;
};

const baseContainer = new Composite('container', '', {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
});

const emptySelectedComponent = new Composite('', '', {});

const initialState: ComponentState = {
    mainComponent: baseContainer,
    selectedComponent: emptySelectedComponent,
};

const componentReducer = (state: ComponentState = initialState, action: ComponentActions) => {
    switch (action.type) {
        case 'ADD_COMPONENT':
            addComponent(state.mainComponent, action);
            return { ...state };

        case 'SELECT_COMPONENT':
            selectComponent(state, state.mainComponent, action);
            return;

        case 'DELETE_SELECTED_COMPONENT':
            deleteComponent(state.mainComponent, state.mainComponent, state.mainComponent, action);
            return;

        case 'UPDATE_COMPONENT_CSS':
            updateCss(state.selectedComponent, action);
            return;
        case 'UPDATE_COMPONENT_CLASSES':
            updateClasses(state.selectedComponent, action);
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
        state.selectedComponent = emptySelectedComponent;
    }
    if (component.id === action.payload.componentId) {
        state.selectedComponent = component;
        return;
    }
    component.children.forEach((comp) => {
        selectComponent(state, comp, action);
    });
}

function deleteComponent(
    mainComponent: Composite,
    parentComponent: Composite,
    thisComponent: Composite,
    action: IDeleteComponentAction
) {
    if (mainComponent.id === action.payload) {
        return;
    } else if (thisComponent.id !== mainComponent.id && thisComponent.id === action.payload) {
        parentComponent.removeChild(thisComponent.id);
        return;
    } else {
        thisComponent.children.forEach((childComponent) => {
            deleteComponent(mainComponent, thisComponent, childComponent, action);
        });
    }
}

function updateCss(selectedComponent: Composite, action: IUpdateCssAction) {
    selectedComponent.css = { ...selectedComponent.css, ...action.payload };
}

function updateClasses(selectedComponent: Composite, action: IUpdateClassesAction) {
    selectedComponent.classes = action.payload;
}
