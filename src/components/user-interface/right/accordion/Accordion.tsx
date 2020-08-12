import React from 'react';
import {
    LayoutView,
    BackgroundView,
    CustomView,
    DisplayView,
    FontView,
    DeleteComponentView,
    DuplicateComponentView,
} from './accordion-views';

export const Accordion: React.FC = () => {
    return (
        <div>
            <ul uk-accordion="multiple: true">
                <li className="uk-open">
                    <LayoutView />
                </li>
            </ul>
            <div className="right_divider" />
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
                    <DeleteComponentView />
                </li>
            </ul>

            <ul uk-accordion="multiple: true">
                <li>
                    <DuplicateComponentView />
                </li>
            </ul>
        </div>
    );
};
