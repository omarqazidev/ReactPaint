/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import '../../../css/headercss.css';
import { useComponent, useUI } from '../../../redux';
import { generateCode } from '../../../generate/ReactCodeGenerator';
import { savefile, saveHtmlElementAsPng } from '../../../utils/savefile';
import Composite from '../../../structures/Composite';
import { buildWebpage } from '../../../utils/buildwebpage';

function Header() {
    const { mainComponent, componentDispatch } = useComponent();
    const { UIDispatch } = useUI();
    return (
        <div className="filemenu">
            <img src="reactpaint_logo.png" alt="logo" className="rp-logo" />
            <span className="filemenu-text">ReactPaint</span>
            <div>{renderNavBar(mainComponent, UIDispatch, componentDispatch)}</div>
        </div>
    );
}
export default Header;

function renderNavBar(mainComponent: Composite, UIDispatch: Function, componentDispatch: Function) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Project
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    componentDispatch({
                                        type: 'NEW_PROJECT',
                                    });
                                }}
                            >
                                New Project
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    console.log(JSON.stringify(mainComponent));
                                    savefile(
                                        JSON.stringify(mainComponent),
                                        'ReactPaintProject.json'
                                    );
                                }}
                            >
                                Save Project
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    UIDispatch({
                                        type: 'UPDATE_IMPORT_MODAL',
                                        payload: { isOpen: true },
                                    });
                                }}
                            >
                                Load Project
                            </a>
                        </div>
                    </li>
                    {/*  Navbar */}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Export
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    const htmlElement = document.getElementById('mainGrid');
                                    if (htmlElement) {
                                        const htmlString = buildWebpage(htmlElement);
                                        savefile(htmlString, 'ReactPaintWebpage.html');
                                    }
                                }}
                            >
                                Save as HTML
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    console.log(JSON.stringify(mainComponent));
                                    savefile(JSON.stringify(mainComponent), 'ReactPaintJSON.json');
                                }}
                            >
                                Save as JSON
                            </a>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    saveHtmlElementAsPng(document.getElementById('mainGrid'));
                                }}
                            >
                                Save as PNG
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => {
                                    savefile(
                                        generateCode(mainComponent),
                                        'ReactPaintComponent.jsx'
                                    );
                                }}
                            >
                                Save as React Component
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
