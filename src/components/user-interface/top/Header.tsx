import React from 'react';
import '../../../css/header.css';
import { useComponent } from '../../../redux';
import { generateCode } from '../../../generate/ReactCodeGenerator';

function Header() {
    const { mainComponent } = useComponent();

    return (
        <div className="filemenu">
            <img src="reactpaint_logo.png" alt="logo" className="rp-logo" />
            <span className="filemenu-text">ReactPaint</span>
            <button
                onClick={() => {
                    console.log(generateCode(mainComponent));
                }}
            >
                Generate Code
            </button>

            <button
                onClick={() => {
                    console.log(JSON.stringify(mainComponent));
                }}
            >
                JSON Code
            </button>
        </div>
    );
}
export default Header;

// function generateCode(component: Composite) {
//     let parentText: string = `
//         <${component.type}>

//             ${component.children.map((childComponent) => {
//                 let childText: string;

//                 if (childComponent.type.toLocaleLowerCase() !== 'container') {
//                     childText = `
//                         <${childComponent.type} className={${
//                         childComponent.classes
//                     } style={${JSON.stringify(childComponent.css)}}}>
//                             ${childComponent.value}
//                         </${childComponent.type}>
//                     `;
//                     return childText;
//                 } else {
//                     return generateCode(childComponent);
//                 }
//             })}
//         </${component.type}>
//         `;

//     return parentText;
// }

// function generateCode(component: Composite) {
//     let parentText: string = `
//         <${component.type}>

//             ${component.children.map((childComponent) => {
//                 let childText: string;

//                 if (childComponent.type.toLocaleLowerCase() !== 'container') {
//                     childText = `
//                         <${childComponent.type} className={${childComponent.classes}}>
//                             ${childComponent.value}
//                         </${childComponent.type}>
//                     `;
//                     return childText;
//                 } else {
//                     return generateCode(childComponent);
//                 }
//             })}
//         </${component.type}>
//         `;

//     return parentText;
// }
