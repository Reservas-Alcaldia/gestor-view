import { createBrowserRouter } from 'react-router-dom';
import Admin from '../pages/Admin';
import Login from '../pages/Login';

const routerUser = createBrowserRouter([
    {path: '/', element: <Admin />},
    {path: '/admin', element: <Admin />},
  ]);

const routerDefault = createBrowserRouter([
  {path: '*', element: <Login />}
]);
  
export {routerUser, routerDefault};