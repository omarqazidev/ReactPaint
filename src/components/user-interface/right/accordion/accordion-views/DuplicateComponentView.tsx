/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useComponent } from '../../../../../redux';

export function DuplicateComponentView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function setComponentToDuplicate() {
        dispatch({ type: 'DUPLICATE_SELECTED_COMPONENT', payload: selectedComponent!.id });
    }

    return (
        <>
            <a className="uk-accordion-title">Duplicate</a>

            <div className="uk-accordion-content">
                <div className="right_component_button" onClick={(e) => setComponentToDuplicate()}>
                    Duplicate
                </div>
            </div>
        </>
    );
}
