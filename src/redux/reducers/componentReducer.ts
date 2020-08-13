import {
    IAddComponentAction,
    ISelectComponentAction,
    IUpdateCssAction,
    IUpdateClassesAction,
    IDeleteComponentAction,
    IDuplicateComponentAction,
    IUpdateComponentBackgroundColorAction,
    IUpdateValueAction,
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
    height: '89vh',
    width: '100%',
    overflow: 'auto',
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
            return { ...state };

        case 'UPDATE_COMPONENT_CSS':
            updateCss(state.mainComponent, state.selectedComponent, action);
            return { ...state };
        case 'UPDATE_COMPONENT_CLASSES':
            updateClasses(state.selectedComponent, action);
            return { ...state };

        case 'DUPLICATE_SELECTED_COMPONENT':
            duplicateComponent(
                state.mainComponent,
                state.mainComponent,
                state.mainComponent,
                action
            );
            return { ...state };

        case 'UPDATE_COMPONENT_BACKGROUND_COLOR':
            updateBackgroundColor(state.mainComponent, action);
            return { ...state };

        case 'IMPORT_JSON_AS_PROJECT':
            const parsedJson: Composite = JSON.parse(action.payload);

            const component = importJson(parsedJson);
            state = {
                ...state,
                selectedComponent: new Composite('', '', {}),
                mainComponent: component,
            };
            return state;

        case 'NEW_PROJECT':
            newProject(state);
            return state;

        case 'UPDATE_VALUE':
            updateValue(state.mainComponent, action);
            return state;

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

function duplicateComponent(
    mainComponent: Composite,
    parentComponent: Composite,
    thisComponent: Composite,
    action: IDuplicateComponentAction
) {
    if (mainComponent.id === action.payload) {
        return;
    } else if (thisComponent.id !== mainComponent.id && thisComponent.id === action.payload) {
        let newObject: Composite = new Composite(thisComponent.type, thisComponent.value, {
            ...thisComponent.css,
        });
        newObject.classes = thisComponent.classes;
        thisComponent.children.forEach((child) => {
            newObject.addChild(child);
        });
        parentComponent.addChild(newObject);
        return;
    } else {
        thisComponent.children.forEach((childComponent) => {
            duplicateComponent(mainComponent, thisComponent, childComponent, action);
        });
    }
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

function updateCss(
    mainComponent: Composite,
    selectedComponent: Composite,
    action: IUpdateCssAction
) {
    let css: React.CSSProperties = { ...action.payload };
    if (selectedComponent.id === mainComponent.id) {
        delete css['height'];
        delete css['minHeight'];
        delete css['maxHeight'];

        delete css['width'];
        delete css['minWidth'];
        delete css['maxWidth'];

        delete css['margin'];
        delete css['marginTop'];
        delete css['marginBottom'];
        delete css['marginRight'];
        delete css['marginLeft'];

        delete css['padding'];
        delete css['paddingTop'];
        delete css['paddingBottom'];
        delete css['paddingRight'];
        delete css['paddingLeft'];
    }
    selectedComponent.css = { ...selectedComponent.css, ...css };
}

function updateClasses(selectedComponent: Composite, action: IUpdateClassesAction) {
    selectedComponent.classes = action.payload;
}

function updateBackgroundColor(
    component: Composite,
    action: IUpdateComponentBackgroundColorAction
) {
    if (action.payload.componentId === component.id) {
        component.css = { ...component.css, backgroundColor: action.payload.backgroundColor };
        return;
    }
    component.children.forEach((child) => {
        updateBackgroundColor(child, action);
    });
}

function newProject(state: ComponentState) {
    state.mainComponent = new Composite('container', '', {
        backgroundColor: 'white',
        height: '89vh',
        width: '100%',
        overflow: 'auto',
    });
    state.selectedComponent = new Composite('', '', {});
}

function importJson(component: Composite) {
    let newObject: Composite = new Composite(component.type, component.value, {
        ...component.css,
    });
    newObject.classes = component.classes;
    component.children.forEach((child) => {
        newObject.addChild(importJson(child));
    });
    return newObject;
}

function updateValue(component: Composite, action: IUpdateValueAction) {
    if (component.id === action.payload.componentId) {
        component.value = action.payload.valueToUpdate;
    }
    component.children.forEach((childComponent) => {
        updateValue(childComponent, action);
    });
}

// function importJsonAsProject(
//     mainComponent: Composite,
//     selectedComponent: Composite,
//     action: IImportJsonAsProjectAction
// ) {
//     const parsedJson: Composite = JSON.parse(action.payload);

//     let newObject: Composite = new Composite(parsedJson.type, parsedJson.value, {
//         ...parsedJson.css,
//     });
//     newObject.classes = parsedJson.classes;
//     parsedJson.children.forEach((child) => {
//         newObject.addChild(child);
//     });
//     return newObject;
// }

// function getEntireProjectObject(parentObject: Composite) {
//     let newObject: Composite = new Composite(parentObject.type, parentObject.value, {
//         ...parentObject.css,
//     });
//     newObject.classes = parentObject.classes;
//     newObject.id = parentObject.id;
//     parentObject.children.forEach((child) => {
//         newObject.addChild(getEntireProjectObject(child));
//     });
//     return newObject;
// }
