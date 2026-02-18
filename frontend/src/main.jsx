import React from "react"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {
    Routes,
    Route,
    BrowserRouter,
    useLocation,
    useNavigationType,
    createRoutesFromChildren,
    matchRoutes,
} from "react-router";

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from "@clerk/clerk-react";
import {Toaster} from "react-hot-toast";
const queryClient = new QueryClient()
import AuthProvider from "./providers/AuthProvider.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://a60dbcdf28e35cdcd7d0487fb3eaca8f@o4510813727293440.ingest.us.sentry.io/4510904747884544",
    integrations: [
        Sentry.reactRouterV7BrowserTracingIntegration({
            useEffect: React.useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes,
        })
    ],
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true
});




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>

            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                <App />
                </AuthProvider>
                <Toaster />
            </QueryClientProvider>
        </BrowserRouter>
        </ClerkProvider>

    </StrictMode>
)