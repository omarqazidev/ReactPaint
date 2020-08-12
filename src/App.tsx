import React from 'react';
import MainScreen from './components/user-interface/MainScreen';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ImportModal } from './components/modals/ImportModal';
function App() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <MainScreen />
            </DndProvider>
            <ImportModal />
        </div>
    );
}

export default App;
