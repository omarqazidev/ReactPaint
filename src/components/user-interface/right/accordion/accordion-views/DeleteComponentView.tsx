import React from 'react';
import { useComponent } from '../../../../../redux';

export function DeleteComponentView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function setComponentToDelete() {
        dispatch({ type: 'DELETE_SELECTED_COMPONENT', payload: selectedComponent!.id });
    }

    return (
        <>
            <a className="uk-accordion-title">Delete</a>

            <div className="uk-accordion-content">
                <div className="component_button" onClick={(e) => setComponentToDelete()}>
                    Delete
                </div>
            </div>
        </>
    );
}
