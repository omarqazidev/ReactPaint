import React from 'react';
import { Renderer } from './Renderer';

const Grid: React.FC = () => {
    const style: React.CSSProperties = {
        backgroundColor: '#2f3560',
        padding: '10px',
        height: '100%',
        width: '100%',
    };

    return (
        <>
            <div style={style} id={'mainGrid'}>
                {Renderer()}
            </div>
        </>
    );
};

export default Grid;
