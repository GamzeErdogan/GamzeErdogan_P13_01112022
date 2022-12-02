import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from './pages/HomePage' 
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import TransactionPage from "./pages/TransactionPage";
import {useSelector} from 'react-redux'


function App() {
    let isLogging = useSelector((state) => state?.userLoginReducer?.isLogging);
    
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<LogInPage />} />
                    {isLogging ?
                    <>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/transaction" element={<TransactionPage />} /> </>: null
                }
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
