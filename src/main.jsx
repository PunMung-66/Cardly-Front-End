import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AddContent from './pages/Dashboard/AddContent.jsx'
import EditContent from './pages/Dashboard/EditContent.jsx'
import MyBookmarks from './pages/Dashboard/MyBookmarks.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import MyFlashCards from './pages/Dashboard/MyFlashCards.jsx'
import Home from './pages/Dashboard/Home.jsx'
import Notfound from './pages/Dashboard/Notfound.jsx'
import MainPage from './pages/MainPage.jsx'
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import FlashCard from './pages/FlashCard/FlashCard.jsx'

import Profile from './pages/Dashboard/Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Wrapper from './pages/Auth/Wrapper.jsx'
import Nuz from './pages/Nuz.jsx'
import PlayingPage from './pages/FlashCard/PlayingPage.jsx'

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
        path: '/play/flashcard/:id',
        element: (
            <Wrapper>
                <MainLayout>
                    <PlayingPage />
                </MainLayout>
            </Wrapper>
        ),
        errorElement: <Notfound />,
    },
    {
        path: '/dashboard',
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
                path: 'myflashcards',
                element: <MyFlashCards />,
            },
            {
                path: 'flashcard/:id',
                element: <FlashCard />,
            },
            {
                path: 'addcontent',
                element: <AddContent />,
            },
            {
                path: 'editcontent/:id',
                element: <EditContent />,
            },
            {
                path: 'mybookmarks',
                element: <MyBookmarks />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'nus',
                element: <Nuz />,
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
