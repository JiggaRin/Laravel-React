import { Link, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import { useEffect } from 'react';
import axiosClient from '../axios-client.js';

export default function DefaultLayout() {
   const { user, token , setUser, setToken} = useStateContext();

   if (!token) {
      return <Navigate to="/login" />;
   }

   const onLogout = (event) => {
      event.preventDefault();
      axiosClient.post('/logout').then(() => {
         setUser({})
         setToken(null)
      })
   }

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
      axiosClient.get('/user').then(({data}) => {
         setUser(data)
      })
   }, []);

   return (
      <div id="defaultLayout">
         <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
         </aside>

         <div className="content"></div>
         <header>
            <div>
               {user.name}
               <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
            </div>
         </header>
         <main>
            <Outlet />
         </main>
      </div>
   );
}
