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
    const [value, setValue] = useState<string>(data.value);
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

    useEffect(() => {
        componentDispatch({
            type: 'UPDATE_VALUE',
            payload: { componentId: data.id, valueToUpdate: value },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const jsx = getJsx(data, value, setValue, singleClick, doubleClick, componentDispatch);

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
                let newElement = (
                    <div
                        style={{
                            border: 'solid 1px black',
                            display: data.css.display,
                            padding: '2px',
                        }}
                    >
                        {jsx}
                    </div>
                );
                setElement(newElement);
            }
        } else {
            setElement(textfield);
        }

        //console.table(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditing, value, data.css, isSelected, selectedComponent!.css]);

    useEffect(() => {
        if (selectedComponent?.id !== data.id) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedComponent?.id]);

    return element;
};
