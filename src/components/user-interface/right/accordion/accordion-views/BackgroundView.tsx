/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { ColorPicker } from '../elements/ColorPicker';
import { useComponent } from '../../../../../redux';

export function BackgroundView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();

    function onBackgroundImageChange(value: string | null) {
        if (value) {
            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: { backgroundImage: `url('${value}')` },
            });

            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { backgroundSize: 'cover' } });
            dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { backgroundRepeat: 'no-repeat' } });
            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: { backgroundPosition: 'center center' },
            });
        }
    }

    return (
        <>
            <a className="uk-accordion-title">Background</a>

            <div className="uk-accordion-content inCenter">
                <ColorPicker text="Background Color:" />

                <div className="flex-space-between height-med">
                    <div>Background Image</div>
                    <div className="width100">
                        <input
                            className="p_field"
                            style={{ width: '100px' }}
                            value={selectedComponent?.css.backgroundImage}
                            onChange={(v) => onBackgroundImageChange(v.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
