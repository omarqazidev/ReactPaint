import React from 'react';
import { useComponent } from '../../../redux';
import '../../../css/right-sidebar.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Accordion } from './accordion/Accordion';

function RightSidebar() {
    const { selectedComponent } = useComponent();

    return (
        <div className="right_sidebar">
            <SimpleBar style={{ maxHeight: '100vh' }} className="simplebar">
                <div className="right_title">Component Properties</div>
                <div className="right_divider" />
                <div className="right_divider" />

                <div className="right_container">
                    <div className="right_properties">
                        <div className="right_element">
                            <div className="right_label">Selected Element</div>
                            <input
                                className="right_field"
                                disabled
                                value={selectedComponent?.id ? selectedComponent?.id : -1}
                            />
                        </div>
                        <Accordion />
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
}
export default RightSidebar;
