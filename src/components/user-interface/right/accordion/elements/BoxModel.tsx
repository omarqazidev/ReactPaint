import React, { useEffect } from 'react';
import '../../../../../css/box-model.css';
import { useComponent } from '../../../../../redux';

export const BoxModel: React.FC = () => {
    const { selectedComponent } = useComponent();
    const selectedCss = selectedComponent!.css;

    useEffect(() => {}, [selectedCss]);

    return (
        <div className="grid-container">
            <div className="inner"></div>
            <div className="mid parent">
                <div className="top">
                    {selectedComponent!.css.padding
                        ? selectedComponent!.css.padding
                        : selectedComponent!.css.paddingTop
                        ? selectedComponent!.css.paddingTop
                        : '?'}
                </div>
                <div className="bottom">
                    {selectedComponent!.css.padding
                        ? selectedComponent!.css.padding
                        : selectedComponent!.css.paddingBottom
                        ? selectedComponent!.css.paddingBottom
                        : '?'}
                </div>
                <div className="left">
                    {selectedComponent!.css.padding
                        ? selectedComponent!.css.padding
                        : selectedComponent!.css.paddingLeft
                        ? selectedComponent!.css.paddingLeft
                        : '?'}
                </div>
                <div className="right">
                    {selectedComponent!.css.padding
                        ? selectedComponent!.css.padding
                        : selectedComponent!.css.paddingRight
                        ? selectedComponent!.css.paddingRight
                        : '?'}
                </div>
            </div>
            <div className="out parent">
                <div className="top">
                    {selectedComponent!.css.margin
                        ? selectedComponent!.css.margin
                        : selectedComponent!.css.marginTop
                        ? selectedComponent!.css.marginTop
                        : '?'}
                </div>
                <div className="bottom">
                    {selectedComponent!.css.margin
                        ? selectedComponent!.css.margin
                        : selectedComponent!.css.marginBottom
                        ? selectedComponent!.css.marginBottom
                        : '?'}
                </div>
                <div className="left">
                    {selectedComponent!.css.margin
                        ? selectedComponent!.css.margin
                        : selectedComponent!.css.marginLeft
                        ? selectedComponent!.css.marginLeft
                        : '?'}
                </div>
                <div className="right">
                    {selectedComponent!.css.margin
                        ? selectedComponent!.css.margin
                        : selectedComponent!.css.marginRight
                        ? selectedComponent!.css.marginRight
                        : '?'}
                </div>
            </div>
        </div>
    );
};
