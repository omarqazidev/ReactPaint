import React, { Ref } from 'react';
import { DragElementWrapper } from 'react-dnd';

interface RPComponentProps {
    type: string;
    css: React.CSSProperties;
}

const RPComponent: React.FC<RPComponentProps> = ({ type, css, children }) => {
    return React.createElement(type, {
        style: { ...css },
        children: children,
    });
};

export default RPComponent;
