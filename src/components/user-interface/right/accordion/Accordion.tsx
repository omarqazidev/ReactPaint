import React from 'react';
import {
    LayoutView,
    BackgroundView,
    CustomView,
    DeleteElementView,
    DisplayView,
    FontView,
} from './accordion-views';

export const Accordion: React.FC = () => {
    return (
        <div>
            <ul uk-accordion="multiple: true">
                <li className="uk-open">
                    <LayoutView />
                </li>
            </ul>
            <div className="p_divider" />
            <ul uk-accordion="multiple: true">
                <li>
                    <BackgroundView />
                </li>
            </ul>

            <ul uk-accordion="multiple: true">
                <li>
                    <FontView />
                </li>
            </ul>

            <ul uk-accordion="multiple: true">
                <li>
                    <DisplayView />
                </li>
            </ul>

            <ul uk-accordion="multiple: true">
                <li>
                    <CustomView />
                </li>
            </ul>

            <ul uk-accordion="multiple: true">
                <li>
                    <DeleteElementView />
                </li>
            </ul>
        </div>
    );
};
