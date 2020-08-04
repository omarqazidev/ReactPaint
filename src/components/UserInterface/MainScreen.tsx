import React from 'react';
import '../../css/MainScreen.css';
import Header from './Top/Header';
import LeftSidebar from './Left/LeftSidebar';
import DesignArea from './Middle/DesignArea';
import { DomToImage } from 'dom-to-image';

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
                <button
                    onClick={() => {
                        const x = document.getElementById('root');
                        console.log('lllll');
                        if (x) {
                            console.log('wqewqe');
                            DomToImage.toJpeg(x, { quality: 0.95 }).then(function (dataUrl) {
                                var link = document.createElement('a');
                                link.download = 'my-image-name.jpeg';
                                link.href = dataUrl;
                                link.click();
                                console.log('qqqw');
                            });
                        }
                    }}
                >
                    ClickMe
                </button>
            </div>

            <div className="footer">{/* <Statusbar /> */}</div>
        </div>
    );
}

export default MainScreen;
