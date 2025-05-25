import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, LoginPage, RegisterPage } from './pages';
import SignUp from './components/SignUp/SignUp';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"         element={<HomePage />} />
                <Route path="/login"    element={<LoginPage />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="*"         element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;