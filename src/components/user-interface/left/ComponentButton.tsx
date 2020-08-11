import React, { ReactFragment } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../dnd/ItemTypes';

interface ComponentButtonProps {
    componentData: { id: number; name: string };
}

const ComponentButton: React.FC<ComponentButtonProps> = ({ componentData }) => {
    let toReturn: ReactFragment;

    const itemToDrag = {
        type: ItemTypes.COMPONENT,
        value: componentData.name,
    };

    const [{ isDragging }, drag] = useDrag({
        item: itemToDrag,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    let opacityValue;
    isDragging ? (opacityValue = '0.5') : (opacityValue = '1');

    let backgroundColorValue;
    isDragging ? (backgroundColorValue = 'lightgrey') : (backgroundColorValue = '#2d325a');

    if (componentData.name === '-') {
        toReturn = <div className="e_divider"></div>;
    } else {
        toReturn = (
            <div
                ref={drag}
                className="component_button"
                style={{ backgroundColor: backgroundColorValue, opacity: opacityValue }}
            >
                {componentData.name}
            </div>
        );
    }
    return <div>{toReturn}</div>;
};

export default ComponentButton;
