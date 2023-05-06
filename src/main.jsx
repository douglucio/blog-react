import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import NewPost from "./pages/newpost/NewPost.jsx"
import PostDetails from "./pages/postdetails/PostDetails.jsx"

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/new",
      element: <NewPost />
    },
    {
      path: "/new/:id",
      element: <PostDetails />
    },
  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
