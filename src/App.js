import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from './pages/HomePage' 
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import TransactionPage from "./pages/TransactionPage";


function App() {

    
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<LogInPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/profile/transaction" element={<TransactionPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
