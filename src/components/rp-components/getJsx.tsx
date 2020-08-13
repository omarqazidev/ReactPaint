import React from 'react';
import Composite from '../../structures/Composite';

export function getJsx(
    data: Composite,
    value: string,
    setValue: Function,
    singleClick: Function,
    doubleClick: Function,
    componentDispatch: Function
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
                const heightOfRandomImage = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
                const widthOfRandomImage = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
                imageLink = `https://picsum.photos/${heightOfRandomImage}/${widthOfRandomImage}`;
                setValue(imageLink);
                componentDispatch({
                    type: 'UPDATE_VALUE',
                    payload: { componentId: data.id, valueToUpdate: imageLink },
                });
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
                componentDispatch({
                    type: 'UPDATE_VALUE',
                    payload: { componentId: data.id, valueToUpdate: videoLink },
                });
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
                componentDispatch({
                    type: 'UPDATE_VALUE',
                    payload: { componentId: data.id, valueToUpdate: audioLink },
                });
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
                componentDispatch({
                    type: 'UPDATE_VALUE',
                    payload: { componentId: data.id, valueToUpdate: iFrameLink },
                });
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

        case 'carousel':
            let sliderWidth: React.CSSProperties = {};
            let sliderHeight: React.CSSProperties = {};
            let sliderImg: React.CSSProperties = {
                maxWidth: '100% !important',
                maxHeight: '100% !important',
            };

            if (!data.css.height) {
                sliderHeight = {
                    height: '200px',
                };
            } else {
                sliderHeight = {
                    height: data.css.height,
                };
            }

            if (!data.css.width) {
                sliderWidth = {
                    width: '400px',
                };
            } else {
                sliderWidth = {
                    width: data.css.width,
                };
            }
            let sliderImages = {
                img1: '',
                img2: '',
                img3: '',
            };
            if (value === 'value') {
                sliderImages = {
                    img1: `https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
                    img2: `https://images.unsplash.com/photo-1526404801122-40fc40fca08f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
                    img3: `https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
                };
                const sliderImagesString = `${sliderImages.img1};${sliderImages.img2};${sliderImages.img3};`;
                componentDispatch({
                    type: 'UPDATE_VALUE',
                    payload: { componentId: data.id, valueToUpdate: sliderImagesString },
                });
            } else {
                if (value !== 'value') {
                    const arrOfLinks = value.split(';');
                    sliderImages.img1 = arrOfLinks[0];
                    sliderImages.img2 = arrOfLinks[1];
                    sliderImages.img3 = arrOfLinks[2];
                }
            }

            return (
                <div
                    style={{ ...sliderWidth, padding: '5px', ...data.css }}
                    onClick={(e) => singleClick(e)(data)}
                    onDoubleClick={(e) => doubleClick(e)}
                >
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={sliderHeight}>
                                <img
                                    src={sliderImages.img1}
                                    className="d-block w-100"
                                    alt="..."
                                    style={sliderImg}
                                />
                            </div>
                            <div className="carousel-item" style={sliderHeight}>
                                <img
                                    src={sliderImages.img2}
                                    className="d-block w-100"
                                    alt="..."
                                    style={sliderImg}
                                />
                            </div>
                            <div className="carousel-item" style={sliderHeight}>
                                <img
                                    src={sliderImages.img3}
                                    className="d-block w-100"
                                    alt="..."
                                    style={sliderImg}
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
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
