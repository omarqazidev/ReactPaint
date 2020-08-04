import React, { ReactElement, ReactText } from 'react';
import { useDrop } from 'react-dnd';
import { useComponent } from '../../redux';
import { ItemTypes } from '../../dnd/ItemTypes';
import Composite from '../../structures/Composite';

interface DivProps {
    id: string;
    css: React.CSSProperties;
    divChildren: ReactElement[];
}

export const Container: React.FC<DivProps> = ({ id, css, divChildren }) => {
    const { backgroundColor, border } = setupCss(css);
    const { drop, divBackgroundColor, divBorder } = useDivDrop(backgroundColor, border, id);
    const { componentDispatch } = useComponent();
    const oneClick = (id: string) => {
        componentDispatch({ type: 'SELECT_COMPONENT', payload: { componentId: id } });
    };

    console.log(css);

    return (
        <div
            style={{
                height: '200px',
                width: '200px',
                ...css,
                backgroundColor: divBackgroundColor,
                border: divBorder,
            }}
            ref={drop}
            onClick={(e) => {
                e.stopPropagation();
                oneClick(id);
            }}
        >
            {divChildren}
        </div>
    );
};

function setupCss(css: React.CSSProperties) {
    let backgroundColor = '';
    if (css.backgroundColor !== 'white') {
        backgroundColor = 'red';
    } else {
        backgroundColor = 'white';
    }

    let border: ReactText = '';
    css.border ? (border = css.border) : (border = 'none');

    return { backgroundColor, border };
}

function useDivDrop(backgroundColor: string, border: ReactText, elementId: string) {
    const { componentDispatch } = useComponent();

    const [{ isOverCurrent }, drop] = useDrop({
        accept: ItemTypes.COMPONENT,

        drop: (item: { type: string; value: string }, monitor) => {
            const didDrop = monitor.didDrop();
            if (didDrop && true) {
                return;
            }
            console.log(item.value);

            componentDispatch({
                type: 'ADD_COMPONENT',
                payload: {
                    parentId: elementId,
                    component: new Composite(item.value.toLowerCase(), 'random', {}),
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
