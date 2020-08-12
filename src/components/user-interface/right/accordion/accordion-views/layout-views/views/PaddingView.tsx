/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import NumericInput from 'react-numeric-input';
import { useComponent } from '../../../../../../../redux';

export function PaddingView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingTop: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingRight: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingBottom: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingLeft: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { padding: `${value}px` } });
        }
    }

    function onTopValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { padding: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingTop: `${value}px` } });
        }
    }

    function onRightValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { padding: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingRight: `${value}px` } });
        }
    }

    function onBottomValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { padding: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingBottom: `${value}px` } });
        }
    }

    function onLeftValueChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { padding: undefined } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { paddingLeft: `${value}px` } });
        }
    }

    return (
        <li className="single-property">
            <a className="uk-accordion-title">
                <div>Padding</div>
            </a>
            <div className="uk-accordion-content">
                <div className="flex-space-between height-med">
                    <div>Value</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.padding}
                            onChange={(v) => onValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Top</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.paddingTop}
                            onChange={(v) => onTopValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Right</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.paddingRight}
                            onChange={(v) => onRightValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Bottom</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.paddingBottom}
                            onChange={(v) => onBottomValueChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Left</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.paddingLeft}
                            onChange={(v) => onLeftValueChange(v)}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}
