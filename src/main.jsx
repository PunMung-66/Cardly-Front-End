import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import AddContent from "./pages/AddContent.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Dashboard from "./layouts/Dashboard.jsx";
import FlashCards from "./pages/FlashCards.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import Notfound from "./pages/Notfound.jsx";

import Settings from "./pages/Settings.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "flashcards",
        element: <FlashCards />,
      },
      {
        path: "addcontent",
        element: <AddContent />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "helps",
        element: <Help />,
      }
    ],
     errorElement: <Notfound />,
  },
  {
    path: "/cardly/:id",
    element: (<div className="text-center text-3xl font-bold">Welcome to Cardly</div>),
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
