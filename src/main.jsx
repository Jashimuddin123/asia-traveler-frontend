import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Root from './Root/Root.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import NotFound from './NotFount/NotFound.jsx';
import Home from './Components/Home.jsx';
import AddTourist from './Components/AddTourist.jsx';
import MyList from './Components/MyList.jsx';
import AllTouristSpot from './Components/AllTouristSpot.jsx';
import TouristDetails from './Components/TouristDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: "/addTourist",
        element: <AddTourist></AddTourist>
      },
      {
        path: "/mylist",
        element: <MyList></MyList>
      },
      {
     path: "/allTouristSpot",
     element:<AllTouristSpot></AllTouristSpot>
      },
      {
        path:"/touristDetails/:id",
        element: <TouristDetails></TouristDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/touristSpots/${params.id}`)
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
