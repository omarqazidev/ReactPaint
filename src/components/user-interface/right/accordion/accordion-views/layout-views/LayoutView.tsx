/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BoxModelView } from './views/BoxModelView';
import { HeightView, WeightView, MarginView, PaddingView } from './views';
// import { BoxModelView, HeightView, WeightView, MarginView, PaddingView } from './';

export function LayoutView() {
    return (
        <>
            <a className="uk-accordion-title" href="#">
                Layout
            </a>
            <div className="uk-accordion-content">
                <BoxModelView />
                <div>
                    <ul uk-accordion="multiple: true">
                        <HeightView />

                        <WeightView />

                        <MarginView />

                        <PaddingView />
                    </ul>
                </div>
            </div>
        </>
    );
}
