import React from 'react';
import MainScreen from './components/user-interface/MainScreen';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <MainScreen />
            </DndProvider>
        </div>
    );
}

export default App;
