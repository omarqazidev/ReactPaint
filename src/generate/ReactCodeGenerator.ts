import Composite from '../structures/Composite';
import { cssObjectToString } from '../utils/cssparser';

export function generateCode(component: Composite) {
    let reactAppCode: string = `
    import React from 'react';
    
    
    export function ReactPaintApp() {

        return (
            <React.Fragment>
                ${generateCodeRecursively(component)}
            </React.Fragment>
        )
    }

    `;

    return reactAppCode;
}

function generateCodeRecursively(component: Composite) {
    let parentText: string = `
        <div ${getKeyStyleClass(component)}
        >

        ${component.children
            .map((childComponent) => {
                let childText: string;

                if (childComponent.type !== 'container') {
                    childText = getJsxString(childComponent);
                    return childText;
                } else {
                    return generateCodeRecursively(childComponent);
                }
            })
            .join('\n')}
        </div>
        `;

    return parentText;
}

function getJsxString(data: Composite) {
    switch (data.type.toLowerCase()) {
        case 'text': {
            return `<p ${getKeyStyleClass(data)}
        >
            {${getValue(data)}}
        </p>`;
        }

        case 'heading': {
            return `<h1 ${getKeyStyleClass(data)}
        >
            {${getValue(data)}}
        </h1>`;
        }

        case 'button': {
            return `<button ${getKeyStyleClass(data)}
        >
            {${getValue(data)}}
        </button>`;
        }

        case 'textfield': {
            return `<input ${getKeyStyleClass(data)}
        placeholder={${getValue(data)}}
        />`;
        }

        case 'image': {
            return `<img ${getKeyStyleClass(data)}
        src={${getValue(data)}}
        alt={${getValue(data)}}
        />`;
        }

        case 'video': {
            return `<div ${getKeyStyleClass(data)}
        >
                <video autoPlay>
                    <source src={${getValue(data)}} type="video/mp4" />
                </video>
        </div>`;
        }

        case 'audio': {
            return `<div ${getKeyStyleClass(data)}
                >
                    <audio autoPlay controls src={${getValue(data)}}></audio>
                </div>`;
        }
        case 'iframe': {
            return `<div ${getKeyStyleClass(data)}
                >
                    <iframe
                        width={{${data.css.width}}}
                        height={{${data.css.height}}}
                        src={${getValue(data)}}
                        frameBorder={0}
                        allowFullScreen
                    ></iframe>
                </
                div>`;
        }

        case 'carousel': {
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
                img1: `https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
                img2: `https://images.unsplash.com/photo-1526404801122-40fc40fca08f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
                img3: `https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
            };
            if (data.value !== 'value') {
                const arrOfLinks = data.value.split(';');
                sliderImages.img1 = arrOfLinks[0];
                sliderImages.img2 = arrOfLinks[1];
                sliderImages.img3 = arrOfLinks[2];
            }
            return `<div style={{${cssObjectToString({ ...sliderWidth, padding: '5px' })}}}
            
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
                    <div className="carousel-item active" style={{${cssObjectToString(
                        sliderHeight
                    )}}}>
                        <img
                            src={"${sliderImages.img1}"}
                            className="d-block w-100"
                            alt="..."
                            style={{${cssObjectToString(sliderImg)}}}
                        />
                    </div>
                    <div className="carousel-item" style={{${cssObjectToString(sliderHeight)}}}>
                        <img
                            src={"${sliderImages.img2}"}
                            className="d-block w-100"
                            alt="..."
                            style={{${cssObjectToString(sliderImg)}}}
                        />
                    </div>
                    <div className="carousel-item" style={{${cssObjectToString(sliderHeight)}}}>
                        <img
                            src={"${sliderImages.img3}"}
                            className="d-block w-100"
                            alt="..."
                            style={{${cssObjectToString(sliderImg)}}}
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
            </div>`;
        }

        default: {
            return `<p ${getKeyStyleClass(data)}
        >
            {${getValue(data)}}
        </p>`;
        }
    }
}

function getKeyStyleClass(data: Composite) {
    return `
            key={"${data.id}"}
            style={{${cssObjectToString(data.css)}}}
            className={"${data.classes}"}`;
}

function getValue(data: Composite) {
    return `"${data.value}"`;
}

// function cssJSONToReactCSS(data: Composite) {
//     let reactCSS: string = `${JSON.stringify(data.css)}`;
//     reactCSS = reactCSS
//         .split(`":"`)
//         .join(`:"`)
//         .split(`","`)
//         .join(`",`)
//         .substring(2)
//         .replace('}', '');
//     (reactCSS);
//     return reactCSS;
// }

/*
import { render } from 'react-dom';

    render(
        <ReactPaintApp />,
        document.getElementById('root')
    );
*/
