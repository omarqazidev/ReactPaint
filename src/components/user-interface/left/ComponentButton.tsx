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
        toReturn = <div className="left_divider"></div>;
    } else {
        toReturn = (
            <div
                ref={drag}
                className="left_component_button"
                style={{ backgroundColor: backgroundColorValue, opacity: opacityValue }}
            >
                {/* <span>{getIcon(componentData.name)}</span> */}
                {`\t${componentData.name}`}
            </div>
        );
    }
    return <div>{toReturn}</div>;
};

// function getIcon(name: string) {
//     switch (name.toLowerCase()) {
//         case 'container':
//             return <i className="fas fa-box-open"></i>;
//         case 'text':
//             return <i className="fas fa-font"></i>;
//         case 'heading':
//             return <i className="fas fa-heading"></i>;
//         case 'button':
//             return <i className="fas fa-mouse"></i>;
//         case 'textfield':
//             return <i className="fas fa-keyboard"></i>;
//         case 'image':
//             return <i className="fas fa-image"></i>;
//         case 'video':
//             return <i className="fas fa-video"></i>;
//         case 'audio':
//             return <i className="fas fa-volume-up"></i>;
//         case 'iframe':
//             return <i className="fas fa-sticky-note"></i>;
//         default:
//             return <i className="fas fa-box-open"></i>;
//     }
// }

export default ComponentButton;
