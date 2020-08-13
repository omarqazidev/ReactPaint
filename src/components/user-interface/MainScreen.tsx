import React from 'react';
import '../../css/main-screen.css';
import Header from './top/Header';
import LeftSidebar from './left/LeftSidebar';
import DesignArea from './middle/DesignArea';

import RightSidebar from './right/RightSidebar';

function MainScreen() {
    return (
        <div className="application">
            <div className="header">
                <Header />
            </div>

            <div className="left-sidebar">
                <LeftSidebar />
            </div>
            <div className="middle-area">
                <DesignArea />
            </div>
            <div className="right-sidebar">
                <RightSidebar />
            </div>

            <div className="footer">{/* <Statusbar /> */}</div>
        </div>
    );
}

export default MainScreen;

// import { DomToImage } from 'dom-to-image';
/* <button
    onClick={() => {
        const x = document.getElementById('root');
        if (x) {
            DomToImage.toJpeg(x, { quality: 0.95 }).then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
        }
    }}
    >
    ClickMe
</button> */
