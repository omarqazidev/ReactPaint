import React, { useContext } from 'react';
import NumericInput from 'react-numeric-input';
import { useComponent } from '../../../../../../../redux';

export function HeightView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { height: value } });
        }
    }

    function onMinValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { minHeight: value } });
        }
    }

    function onMaxValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { maxHeight: value } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { height: value } });
        }
    }

    return (
        <li className="single-property">
            <a className="uk-accordion-title">
                <div>Height</div>
            </a>
            <div className="uk-accordion-content">
                <div className="flex-space-between height-med">
                    <div>Value</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.height}
                            onChange={(v) => onValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Minimum</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.minHeight}
                            onChange={(v) => onMinValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Maximum</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.maxHeight}
                            onChange={(v) => onMaxValueChange(v)}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}
