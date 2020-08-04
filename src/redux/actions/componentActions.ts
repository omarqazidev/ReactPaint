import Composite from '../../structures/Composite';

export interface IAddComponentAction {
    readonly type: 'ADD_COMPONENT';
    payload: { component: Composite; parentId: string };
}

export interface ISelectComponentAction {
    readonly type: 'SELECT_COMPONENT';
    payload: { componentId: string };
}

export type ComponentActions = IAddComponentAction | ISelectComponentAction;
