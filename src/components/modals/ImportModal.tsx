import React, { useState } from 'react';
import Modal from 'react-modal';
import { useUI, useComponent } from '../../redux';
import '../../css/modal.css';

Modal.setAppElement('#root');

export const ImportModal = () => {
    const { importModalOpen, UIDispatch } = useUI();
    const { componentDispatch, mainComponent } = useComponent();
    const [jsonString, setJsonString] = useState('');

    return (
        <Modal
            isOpen={importModalOpen}
            onRequestClose={() => {
                UIDispatch({ type: 'UPDATE_IMPORT_MODAL', payload: { isOpen: false } });
            }}
            style={{
                overlay: { ...overlayStyle },
                content: { ...contentStyle },
            }}
        >
            <p style={{ fontSize: '24px' }}>Load Project with JSON</p>
            <p style={{ fontSize: '12px' }}>
                Either grab project json with [Get Current Project], or Copy-Paste project json
                below.
            </p>
            <div style={contentDivStyle}>
                <textarea
                    className={'import-modal-field'}
                    rows={32}
                    cols={100}
                    value={jsonString}
                    onChange={(e) => {
                        setJsonString(e.target.value);
                    }}
                ></textarea>

                <div style={buttonGroupStyle}>
                    <div
                        className={'import-modal-button'}
                        onClick={() => {
                            setJsonString(JSON.stringify(mainComponent, null, '\t'));
                        }}
                    >
                        Get Current Project
                    </div>
                    <div
                        className={'import-modal-button'}
                        onClick={() => {
                            componentDispatch({
                                type: 'IMPORT_JSON_AS_PROJECT',
                                payload: jsonString,
                            });
                            setJsonString('');
                            UIDispatch({ type: 'UPDATE_IMPORT_MODAL', payload: { isOpen: false } });
                        }}
                    >
                        Load
                    </div>
                    <div
                        className={'import-modal-button'}
                        onClick={() => {
                            UIDispatch({ type: 'UPDATE_IMPORT_MODAL', payload: { isOpen: false } });
                        }}
                    >
                        Close
                    </div>
                </div>
            </div>
        </Modal>
    );
};

const overlayStyle: React.CSSProperties = {
    backgroundColor: 'rgba(32, 36, 66, 0.65)',
};

const contentStyle: React.CSSProperties = {
    border: '3px solid black',
    color: '#7076aa',
    backgroundColor: '#292e54',
    fontFamily: 'Montserrat',
    fontWeight: 'lighter',
    fontSize: '18px',
};

const contentDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
};

const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
};
