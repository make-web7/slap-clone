import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Navigate, Route, Routes} from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

function App() {
    return (
        <header>
            <SignedOut>
                <Routes>
                    <Route path="/"  element={<AuthPage/>} />
                    <Route path="*" element={<Navigate to={"/"} replace/>} />
                </Routes>
                <SignInButton mode="modal"/>
            </SignedOut>
            <SignedIn>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/auth" element={<Navigate to={"/"} replace/>}/>
                </Routes>
                <UserButton />
=======
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";
function App() {
    return (
        <>
            <SignedIn>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<Navigate to={"/"} replace />} />
                </Routes>
>>>>>>> auth-frontend
            </SignedIn>
            <SignedOut>


                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="*" element={<Navigate to={"/auth"} replace />} />
                </Routes>
            </SignedOut>

        </>
    );
}

export default App