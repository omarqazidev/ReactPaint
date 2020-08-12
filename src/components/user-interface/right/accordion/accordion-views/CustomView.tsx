/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react';
import { parseCSS, parseStyleObject } from '../../../../../utils/cssparser';
import { useComponent } from '../../../../../redux';

export function CustomView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();
    const [customCss, setCustomCss] = useState('');
    const [customClasses, setCustomClasses] = useState('');
    // const styleString = parseStyleObject(selectedComponent!.css);

    function onCustomCssChange(value: string) {
        if (value) {
            const parsedCss = parseCSS(value);

            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: { ...parsedCss },
            });
            setCustomCss(value);
        }
    }

    function onCustomClassChange(value: string) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CLASSES', payload: value });
            console.log(value);
            setCustomClasses(value);
        }
    }

    return (
        <>
            <a className="uk-accordion-title">Custom</a>

            <div className="uk-accordion-content inCenter">
                <div className="flex-space-between height-med">
                    <div>Custom CSS</div>
                    <div className="width100">
                        <input
                            className="p_field"
                            style={{ width: '100px' }}
                            value={customCss}
                            onChange={(v) => onCustomCssChange(v.target.value)}
                        />
                    </div>
                </div>
                <div className="flex-space-between height-med">
                    <div>Custom Classes</div>
                    <div className="width100">
                        <input
                            className="p_field"
                            style={{ width: '100px' }}
                            value={customClasses}
                            onChange={(v) => onCustomClassChange(v.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
