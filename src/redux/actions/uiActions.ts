export interface IUpdateImportModal {
    readonly type: 'UPDATE_IMPORT_MODAL';
    payload: { isOpen: boolean; projectJson?: string };
}

export type UIActions = IUpdateImportModal;
