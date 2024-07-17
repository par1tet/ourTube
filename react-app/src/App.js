import { React, createContext} from 'react';
import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import SearchPage from './components/pages/SearchPage.jsx';
import videosState from './store/videosState.js';

export const MyContext = createContext('');

function App() {
    const newVideosState = new videosState([])

    return (
        <MyContext.Provider value={newVideosState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    );
}

export default App;
