import React from 'react';
import MainScreen from './components/user-interface/MainScreen';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ImportModal } from './components/modals/ImportModal';
import SimpleBar from 'simplebar-react';
function App() {
    return (
        <div>
            <SimpleBar style={{ maxHeight: '100vh' }} className="simplebar">
                <DndProvider backend={HTML5Backend}>
                    <MainScreen />
                </DndProvider>
                <ImportModal />
            </SimpleBar>
        </div>
    );
}

export default App;
