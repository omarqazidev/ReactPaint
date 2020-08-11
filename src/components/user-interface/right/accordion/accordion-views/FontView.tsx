import React from 'react';
import NumericInput from 'react-numeric-input';
import { ColorPicker } from '../elements/ColorPicker';
import { useComponent } from '../../../../../redux';

export function FontView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onFontSizeChange(value: number | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { fontSize: value } });
        }
    }

    function onFontFamilyChange(value: string | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { fontFamily: value } });
        }
    }

    return (
        <>
            <a className="uk-accordion-title">Font</a>

            <div className="uk-accordion-content inCenter">
                <ColorPicker text="Text Color:" />

                <div className="flex-space-between height-med">
                    <div>Font Size</div>
                    <div className="width100">
                        <NumericInput
                            className="form-control numeric-input"
                            value={selectedComponent?.css.fontSize}
                            onChange={(v) => onFontSizeChange(v)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Font Family</div>
                    <div className="width100">
                        <input
                            className="p_field"
                            style={{ width: '100px' }}
                            value={selectedComponent?.css.fontFamily}
                            onChange={(v) => onFontFamilyChange(v.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
