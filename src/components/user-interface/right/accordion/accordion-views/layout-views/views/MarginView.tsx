/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import NumericInput from 'react-numeric-input';
import { useComponent } from '../../../../../../../redux';

export function MarginView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { margin: `${value}%` } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginTop: undefined } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginRight: undefined } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginBottom: undefined } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginLeft: undefined } });
        }
    }

    function onTopValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginTop: `${value}%` } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { margin: undefined } });
        }
    }

    function onRightValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginRight: `${value}%` } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { margin: undefined } });
        }
    }

    function onBottomValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginBottom: `${value}%` } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { margin: undefined } });
        }
    }

    function onLeftValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { marginLeft: `${value}%` } });
            // dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { margin: undefined } });
        }
    }

    return (
        <li className="single-property">
            <a className="uk-accordion-title">
                <div>Margin</div>
            </a>
            <div className="uk-accordion-content">
                <div className="flex-space-between height-med">
                    <div>Value</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.margin}
                            onChange={(v) => onValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Top</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.marginTop}
                            onChange={(v) => onTopValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Right</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.marginRight}
                            onChange={(v) => onRightValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Bottom</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.marginBottom}
                            onChange={(v) => onBottomValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Left</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.marginLeft}
                            onChange={(v) => onLeftValueChange(v)}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}
