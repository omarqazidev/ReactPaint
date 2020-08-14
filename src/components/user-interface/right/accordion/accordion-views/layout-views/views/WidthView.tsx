/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import NumericInput from 'react-numeric-input';
import { useComponent } from '../../../../../../../redux';

export function WidthView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { width: `${value}%` } });
        }
    }

    function onMinValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { minWidth: `${value}%` } });
        }
    }

    function onMaxValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { maxWidth: `${value}%` } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { width: `${value}%` } });
        }
    }

    return (
        <li className="single-property">
            <a className="uk-accordion-title">
                <div>Width</div>
            </a>
            <div className="uk-accordion-content">
                <div className="flex-space-between height-med">
                    <div>Value</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.width}
                            onChange={(v) => onValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Minimum</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.minWidth}
                            onChange={(v) => onMinValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Maximum</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.maxWidth}
                            onChange={(v) => onMaxValueChange(v)}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}
