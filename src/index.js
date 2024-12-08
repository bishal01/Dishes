import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainCourse from './components/MainCourse';
import Home from './components/Home';
import Desert from './components/Desert';


const router= createBrowserRouter ([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainCourse/>
      },
      {
      path:'/entree',
      element:<Home/>
    },
    {
      path:'/desert',
      element:<Desert/>
    },

    
  ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={ router} />  </React.StrictMode>
);

