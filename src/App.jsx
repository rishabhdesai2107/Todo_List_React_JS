import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoListpage from './Pages/TodoListpage.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import Rootlayout from './Pages/Rootlayout.jsx';
import Registerpage from './Pages/Registerpage.jsx';
import ProtectedRoutes from './services/ProtectedRoutes.jsx';
import Logout from './Pages/Logout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { index: true, element: <Loginpage /> },
      { path: '/Registerpage', element: <Registerpage /> },
      { path: '/TodoListpage',
        element: <ProtectedRoutes/>,
        children: [
          { index: true, element: <TodoListpage /> },
        ],
      },

    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;