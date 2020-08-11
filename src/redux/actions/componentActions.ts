import Composite from '../../structures/Composite';

export interface IAddComponentAction {
    readonly type: 'ADD_COMPONENT';
    payload: { component: Composite; parentId: string };
}

export interface ISelectComponentAction {
    readonly type: 'SELECT_COMPONENT';
    payload: { componentId: string };
}

export interface IUpdateCssAction {
    readonly type: 'UPDATE_COMPONENT_CSS';
    payload: React.CSSProperties;
}

export interface IUpdateClassesAction {
    readonly type: 'UPDATE_COMPONENT_CLASSES';
    payload: string;
}

export interface IDeleteComponentAction {
    readonly type: 'DELETE_SELECTED_COMPONENT';
    payload: string;
}

export interface IDuplicateComponentAction {
    readonly type: 'DUPLICATE_SELECTED_COMPONENT';
    payload: string;
}

export type ComponentActions =
    | IAddComponentAction
    | ISelectComponentAction
    | IUpdateCssAction
    | IUpdateClassesAction
    | IDeleteComponentAction
    | IDuplicateComponentAction;
