import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker, ColorChangeHandler, ColorResult } from 'react-color';
import { useComponent } from '../../../../../redux';

interface ColorPickerProps {
    text: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ text }) => {
    const { componentDispatch: dispatch } = useComponent();

    const [color, setColor] = useState<ColorResult>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const colorPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (colorPickerRef.current) {
            colorPickerRef.current.style.display = 'none';
            setIsOpen(false);
        }
    }, []);

    const handleChange: ColorChangeHandler = (color, event) => {
        setColor({ hex: color.hex, hsl: color.hsl, rgb: color.rgb });

        if (text === 'Text Color:') {
            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: {
                    color: `rgba(${color?.rgb.r}, ${color?.rgb.g}, ${color?.rgb.b}, ${color?.rgb.a})`,
                },
            });
        } else {
            dispatch({
                type: 'UPDATE_COMPONENT_CSS',
                payload: {
                    backgroundColor: `rgba(${color?.rgb.r}, ${color?.rgb.g}, ${color?.rgb.b}, ${color?.rgb.a})`,
                },
            });
        }
    };

    const toggleColorPicker = () => {
        if (colorPickerRef.current) {
            if (colorPickerRef.current.style.display === 'none') {
                colorPickerRef.current.style.display = 'block';
                setIsOpen(true);
            } else {
                console.log('hey');
                colorPickerRef.current.style.display = 'none';
                setIsOpen(false);
            }
        }
    };

    useOutsideClick(colorPickerRef, toggleColorPicker, isOpen);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="fontSize12">{text}</div>
                <div
                    onClick={toggleColorPicker}
                    style={{
                        padding: '2px',
                        backgroundColor: '#9599c2',
                        marginBottom: '10px',
                        marginLeft: '10px',
                        borderRadius: '2px',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            backgroundColor: `rgba(${color?.rgb.r}, ${color?.rgb.g}, ${color?.rgb.b}, ${color?.rgb.a})`,
                            margin: '1px',
                            padding: '8px',

                            borderRadius: '2px',
                        }}
                    ></div>
                </div>
            </div>
            <div ref={colorPickerRef}>
                <SketchPicker color={color?.hsl} onChange={handleChange} disableAlpha={false} />
                <div style={{ padding: '10px' }}></div>
            </div>
        </div>
    );
};

function useOutsideClick(ref: React.RefObject<HTMLDivElement>, callback: Function, when: boolean) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    });

    function handler(e: Event) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            savedCallback.current();
        }
    }

    useEffect(() => {
        if (when) {
            document.addEventListener('click', handler);
            return () => document.removeEventListener('click', handler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [when]);
}
