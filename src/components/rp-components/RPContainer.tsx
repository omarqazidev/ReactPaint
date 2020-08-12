import React, { ReactText, useEffect, useState, ReactElement } from 'react';
import { useDrop } from 'react-dnd';
import { useComponent } from '../../redux';
import { ItemTypes } from '../../dnd/ItemTypes';
import Composite from '../../structures/Composite';
import randomColor from 'randomcolor';

interface ContainerProps {
    data: Composite;
    divChildren: ReactElement[];
}

export const RPContainer: React.FC<ContainerProps> = ({ data, divChildren }) => {
    let { id, css, classes } = data;
    const { componentDispatch } = useComponent();
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [border, setBorder] = useState<React.ReactText>('none');
    const [height, setHeight] = useState<React.ReactText>('100px');
    const [width, setWidth] = useState<React.ReactText>('100px');

    useEffect(() => {
        if (!css.backgroundColor) {
            const someRandomColor = randomColor();
            setBackgroundColor(someRandomColor);
            componentDispatch({
                type: 'UPDATE_COMPONENT_BACKGROUND_COLOR',
                payload: { componentId: data.id, backgroundColor: someRandomColor },
            });
            css.backgroundColor = someRandomColor;
        } else if (css.backgroundColor) {
            setBackgroundColor(css.backgroundColor);
        }

        if (!css.border) {
            css.border = 'none';
        } else {
            setBorder(css.border);
        }

        if (!css.height) {
            setHeight('100px');
            css.height = '100px';
        } else {
            setHeight(css.height);
        }

        if (!css.width) {
            setWidth('100px');
            css.width = '100px';
        } else {
            setWidth(css.width);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [css]);

    const { drop, divBackgroundColor, divBorder } = useDivDrop(backgroundColor, border, data.id);

    const singleClick = (event: React.MouseEvent<any>) => (data: Composite) => {
        event.stopPropagation();
        componentDispatch({ type: 'SELECT_COMPONENT', payload: { componentId: data.id } });
    };

    const doubleClick = (event: React.MouseEvent<any>) => {};

    return (
        <div
            key={id}
            id={data.id}
            className={classes}
            style={{
                height: height,
                width: width,
                ...css,
                backgroundColor: divBackgroundColor,
                border: divBorder,
            }}
            ref={drop}
            onClick={(e) => singleClick(e)(data)}
            onDoubleClick={(e) => doubleClick(e)}
        >
            {divChildren}
        </div>
    );
};

function useDivDrop(backgroundColor: string, border: ReactText, elementId: string) {
    const { componentDispatch } = useComponent();

    const [{ isOverCurrent }, drop] = useDrop({
        accept: ItemTypes.COMPONENT,

        drop: (item: { type: string; value: string }, monitor) => {
            const didDrop = monitor.didDrop();
            if (didDrop && true) {
                return;
            }

            componentDispatch({
                type: 'ADD_COMPONENT',
                payload: {
                    parentId: elementId,
                    component: new Composite(item.value.toLowerCase(), '', {}),
                },
            });
        },

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            isOverCurrent: !!monitor.isOver({ shallow: true }),
            hasDropped: !!monitor.didDrop(),
        }),
    });

    let divBackgroundColor = backgroundColor;
    let divBorder = border;
    isOverCurrent ? (divBackgroundColor = 'lightgreen') : (divBackgroundColor = backgroundColor);
    isOverCurrent ? (divBorder = '3px solid black') : (divBorder = border);

    return { drop, divBackgroundColor, divBorder };
}
