import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from "@clerk/clerk-react";
<<<<<<< HEAD
import { BrowserRouter } from 'react-router'
import {Toaster} from "react-hot-toast";
const queryClient = new QueryClient()
=======
import {BrowserRouter} from "react-router-dom";

>>>>>>> auth-frontend
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
<<<<<<< HEAD
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
            <App />

                </QueryClientProvider>
            </BrowserRouter>
=======

            <App />

>>>>>>> auth-frontend
        </ClerkProvider>
            </BrowserRouter>
    </StrictMode>
)