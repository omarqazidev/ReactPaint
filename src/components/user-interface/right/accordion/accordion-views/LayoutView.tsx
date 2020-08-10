import React from 'react';
// import { BoxModelView, HeightView, WeightView, MarginView, PaddingView } from './';

export function LayoutView() {
    return (
        <>
            <a className="uk-accordion-title">Layout</a>
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
