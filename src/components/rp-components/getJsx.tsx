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

        case 'video':
            let videoLink;
            if (value === 'value') {
                videoLink = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
                // videoLink = 'http://techslides.com/demos/sample-videos/small.mp4';
            } else {
                videoLink = value;
            }
            return (
                <div
                    key={data.id}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                    style={data.css}
                    className={data.classes}
                >
                    <video autoPlay>
                        <source src={videoLink} type="video/mp4" />
                    </video>
                </div>
            );

        case 'audio':
            let audioLink;
            if (value === 'value') {
                audioLink =
                    'https://www.naatsharif.com/download-mp3/junaid-jamshed/mujhe-zindagi-mein-ya-rab.mp3';
            } else {
                audioLink = value;
            }
            return (
                <div
                    key={data.id}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                    className={data.classes}
                    style={{ ...data.css, padding: '10px' }}
                >
                    <audio autoPlay controls src={audioLink}></audio>
                </div>
            );

        case 'iframe':
            let iFrameLink;
            if (value === 'value') {
                iFrameLink = 'https://dev.to/omarqazidev';
            } else {
                iFrameLink = value;
            }
            return (
                <div
                    key={data.id}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                    className={data.classes}
                    style={{ ...data.css, padding: '5px' }}
                >
                    <iframe
                        width={data.css.width}
                        height={data.css.height}
                        src={iFrameLink}
                        title={'iFrame'}
                        frameBorder={0}
                        allowFullScreen
                    ></iframe>
                </div>
            );

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
