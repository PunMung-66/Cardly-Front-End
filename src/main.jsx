import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AddEditContent from './pages/Dashboard/AddEditContent.jsx'
import Bookmarks from './pages/Dashboard/Bookmarks.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import FlashCards from './pages/Dashboard/FlashCards.jsx'
import Home from './pages/Dashboard/Home.jsx'
import Notfound from './pages/Dashboard/Notfound.jsx'
import MainPage from './pages/MainPage.jsx'
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'

import Settings from './pages/Dashboard/Settings.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Wrapper from './pages/Auth/Wrapper.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/auth',
        children: [
            { path: 'signup', element: <Signup /> },
            { path: 'login', element: <Login /> },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <Wrapper>
                <MainLayout>
                    <Dashboard />
                </MainLayout>
            </Wrapper>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'flashcards',
                element: <FlashCards />,
            },
            {
                path: 'addcontent',
                element: <AddEditContent />,
            },
            {
                path: 'bookmarks',
                element: <Bookmarks />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
        errorElement: <Notfound />,
    },
    {
        path: '/cardly/:id',
        element: (
            <div className="text-center text-3xl font-bold">
                Welcome to Cardly
            </div>
        ),
    },
    {
        path: '*',
        element: <Notfound />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
