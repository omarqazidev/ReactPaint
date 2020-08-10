import React, { useState, useEffect, ReactElement } from 'react';
import Composite from '../../structures/Composite';
import { useComponent } from '../../redux';
import { getJsx } from './getJsx';

interface ComponentProps {
    data: Composite;
}

export const RPComponent: React.FC<ComponentProps> = ({ data }) => {
    const { componentDispatch, selectedComponent } = useComponent();
    const [element, setElement] = useState<ReactElement | null>(null);
    const [value, setValue] = useState<string>('value');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const singleClick = (event: React.MouseEvent<any>) => (data: Composite) => {
        event.stopPropagation();
        componentDispatch({ type: 'SELECT_COMPONENT', payload: { componentId: data.id } });
        setIsSelected(true);
    };

    const doubleClick = (event: React.MouseEvent<any>) => {
        if (isEditing === false) {
            setIsEditing(true);
        }
    };

    const jsx = getJsx(data, value, setValue, singleClick, doubleClick);

    let textfield = (
        <input
            onDoubleClick={() => setIsEditing(false)}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );

    useEffect(() => {
        if (isEditing === false) {
            if (isSelected === false) {
                data.value = value;
                setElement(jsx);
            } else {
                let newElement = <div style={{ border: 'solid 1px black' }}>{jsx}</div>;
                setElement(newElement);
            }
        } else {
            setElement(textfield);
        }
    }, [isEditing, value, data.css, isSelected]);

    useEffect(() => {
        if (selectedComponent?.id !== data.id) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
    }, [selectedComponent?.id]);

    return element;
};
