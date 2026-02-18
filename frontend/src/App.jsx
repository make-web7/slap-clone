import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import * as Sentry from "@sentry/react";

function App() {
    const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes)
    return (
        <>
            <button onClick={() => {
                throw new Error('eiwjfi')

            }}>Throw Error</button>
            <SignedIn>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<Navigate to={"/"} replace />} />
                </Routes>
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