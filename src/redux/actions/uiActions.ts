export interface IUpdateSelectedComponent {
    readonly type: 'UPDATE__SELECTED_COMPONENT';
    payload: { componentId: string };
}

export type UIActions = IUpdateSelectedComponent;
