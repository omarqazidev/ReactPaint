import React from 'react';
import '../../../css/header.css';

function Header() {
    return (
        <div className="filemenu">
            <img src="reactpaint_logo.png" alt="logo" className="rp-logo" />
            <span className="filemenu-text">ReactPaint</span>
        </div>
    );
}
export default Header;
