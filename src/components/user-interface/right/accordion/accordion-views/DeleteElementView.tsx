import React, { useContext } from 'react';
import { useComponent } from '../../../../../redux';

export function DeleteElementView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function setElementToDelete() {
        dispatch({ type: 'DELETE_SELECTED_COMPONENT', payload: selectedComponent!.id });
    }

    return (
        <>
            <a className="uk-accordion-title">Delete</a>

            <div className="uk-accordion-content">
                <div className="component_button" onClick={(e) => setElementToDelete()}>
                    Delete
                </div>
            </div>
        </>
    );
}
