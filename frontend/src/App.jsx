import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Navigate, Route, Routes} from "react-router-dom";
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
            </SignedIn>
        </header>
    );
}

export default App