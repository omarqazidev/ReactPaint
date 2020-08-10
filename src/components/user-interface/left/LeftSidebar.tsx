import React from 'react';
import '../../../css/left-sidebar.css';
import ComponentButton from './ComponentButton';

function LeftSidebar() {
    return (
        <div className="left_sidebar">
            <div className="left_title">React Elements</div>
            <div className="left_divider"></div>
            {components.map((component) => (
                <ComponentButton componentData={component} key={component.id} />
            ))}
        </div>
    );
}

export default LeftSidebar;

const components: { id: number; name: string }[] = [
    { id: 1, name: 'Container' },
    // { id: 2, name: 'Span' },
    { id: 3, name: '-' },
    { id: 4, name: 'Text' },
    { id: 5, name: 'Heading' },
    { id: 6, name: '-' },
    { id: 7, name: 'Button' },
    { id: 8, name: 'TextField' },
    { id: 9, name: 'Image' },
    { id: 10, name: '-' },
    { id: 11, name: 'Video' },
    { id: 12, name: 'Audio' },
    // { id: 13, name: 'Slider' },
    { id: 14, name: '-' },
    { id: 15, name: 'iFrame' },
];
