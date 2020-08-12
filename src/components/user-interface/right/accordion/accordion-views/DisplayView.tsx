/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import { useComponent } from '../../../../../redux';

export function DisplayView() {
    const { componentDispatch: dispatch } = useComponent();

    const options = [
        'select display',
        'inline',
        'block',
        'inline-block',
        'contents',
        'flex',
        'grid',
    ];
    const defaultOption = options[0];

    function onDisplayChange(option: Option) {
        if (option.value !== 'select display') {
            if (option) {
                dispatch({ type: 'UPDATE_COMPONENT_CSS', payload: { display: option.value } });
            }
        }
    }

    return (
        <>
            <a className="uk-accordion-title">Display</a>

            <div className="uk-accordion-content inCenter">
                <div className="flex-space-between height-med">
                    <div>Display</div>
                    <div>
                        <Dropdown
                            options={options}
                            onChange={onDisplayChange}
                            value={defaultOption}
                            placeholder="Select an option"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
