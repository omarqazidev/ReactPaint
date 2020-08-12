export interface IUpdateImportModal {
    readonly type: 'UPDATE_IMPORT_MODAL';
    payload: { isOpen: boolean };
}

export type UIActions = IUpdateImportModal;
