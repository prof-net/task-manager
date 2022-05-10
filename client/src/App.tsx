import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Auth from "./components/auth/Auth";
import Main from "./pages/main/Main";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
    return (
        <div className="app">
            <div className="login">
                <Auth/>
            </div>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/tasks' element={<TasksPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
