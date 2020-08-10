import React from 'react';
import Composite from '../../structures/Composite';

export function getJsx(
    data: Composite,
    value: string,
    setValue: Function,
    singleClick: Function,
    doubleClick: Function
) {
    switch (data.type.toLowerCase()) {
        case 'text': {
            return (
                <p
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                >
                    {value}
                </p>
            );
        }
        case 'heading': {
            return (
                <h1
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                >
                    {value}
                </h1>
            );
        }
        case 'button': {
            return (
                <button
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                >
                    {value}
                </button>
            );
        }
        case 'textfield': {
            return (
                <input
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                    placeholder={value}
                />
            );
        }

        case 'image': {
            let imageLink;
            if (value === 'value') {
                const heightOfRandomImage = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
                const widthOfRandomImage = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
                imageLink = `https://picsum.photos/${heightOfRandomImage}/${widthOfRandomImage}`;
                setValue(imageLink);
            } else {
                imageLink = value;
            }
            return (
                <img
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                    src={imageLink}
                    alt={value}
                />
            );
        }

        default: {
            return (
                <p
                    key={data.id}
                    style={data.css}
                    className={data.classes}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                >
                    {value}
                </p>
            );
        }
    }
}
