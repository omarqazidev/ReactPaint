import React from 'react';
import { parseCSS, parseStyleObject } from '../../../../../utils/cssparser';
import { useComponent } from '../../../../../redux';

export function CustomView() {
    const { selectedComponent, componentDispatch: dispatch } = useComponent();
    const styleString = parseStyleObject(selectedComponent!.css);

    function onCustomCssChange(value: string | null) {
        if (value) {
            const parsedCss = parseCSS(value);

            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: { ...selectedComponent?.css, ...parsedCss },
            });
        }
    }

    function onCustomClassChange(value: string | null) {
        if (value) {
            dispatch({ type: 'UPDATE_COMPONENT_CLASSES', payload: value });
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
                            value={parseStyleObject(selectedComponent!.css)}
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
                            value={selectedComponent?.classes}
                            onChange={(v) => onCustomClassChange(v.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
