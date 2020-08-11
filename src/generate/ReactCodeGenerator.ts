import Composite from '../structures/Composite';

export function generateCode(component: Composite) {
    let reactAppCode: string = `
    import React from 'react';
    import { render } from 'react-dom';

    render(
        <App />,
        document.getElementById('root')
    );
    
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
            style={{${cssJSONToReactCSS(data)}}}
            className={"${data.classes}"}`;
}

function getValue(data: Composite) {
    return `"${data.value}"`;
}

function cssJSONToReactCSS(data: Composite) {
    let reactCSS: string = `${JSON.stringify(data.css)}`;
    reactCSS = reactCSS
        .split(`":"`)
        .join(`:"`)
        .split(`","`)
        .join(`",`)
        .substring(2)
        .replace('}', '');
    console.log(reactCSS);
    return reactCSS;
}
