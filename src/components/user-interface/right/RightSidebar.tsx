import React from 'react';
import SimpleBar from 'simplebar-react';
import { useComponent } from '../../../redux';
import '../../../css/right-sidebar.css';

function RightSidebar() {
    const { selectedComponent } = useComponent();

    return (
        <div className="right_sidebar">
            <SimpleBar style={{ maxHeight: 850 }} className="simplebar">
                <div className="right_title">Element Properties</div>
                <div className="right_divider" />
                <div className="right_divider" />

                <div className="right_container">
                    <div className="right_properties">
                        <div className="right_element">
                            <div className="right_label">Selected Element</div>
                            <input className="right_field" disabled value={selectedComponent?.id} />
                        </div>

                        {/* <Accordion /> */}
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
}
export default RightSidebar;
