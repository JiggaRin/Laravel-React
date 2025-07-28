import { useEffect, useState } from 'react';
import axiosClient from '../axios-client.js';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import Paginate from '../components/Pagination.jsx';

export default function Users() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [links, setLinks] = useState([]);
   const { setNotification } = useStateContext();

   useEffect(() => {
      getUsers(currentPage);
   }, [currentPage]);

   const getUsers = (page) => {
      setLoading(true);
      axiosClient
         .get(`/users?page=${page}`)
         .then(({ data }) => {
            setLoading(false);
            setUsers(data.data);
            setLinks(data.meta.links);
         })
         .catch(() => {
            setLoading(false);
            setNotification('Failed to fetch users');
         });
   };

   const onDelete = (user) => {
      if (!window.confirm('Are you sure that you want to delete this user?')) {
         return;
      }

      axiosClient.delete(`/users/${user.id}`).then(() => {
         setNotification('User was successfully deleted');
         getUsers(currentPage);
      });
   };

   const paginate = (pageNumber) => {
      if (pageNumber > 0) {
         setCurrentPage(pageNumber);
      }
   };

   return (
      <div>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Users</h1>
            <Link to="/users/new" className="btn-add">
               Add new
            </Link>
         </div>

         <div className="card animated fadeInDown">
            <table>
               <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Create Date</th>
                  <th>Actions</th>
               </tr>
               </thead>
               {loading && (
                  <tbody>
                  <tr>
                     <td colSpan="5" className="text-center">
                        Loading...
                     </td>
                  </tr>
                  </tbody>
               )}
               {!loading && (
                  <tbody>
                  {users.map((u) => (
                     <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.created_at}</td>
                        <td>
                           <Link className="btn-edit" to={`/users/${u.id}`}>
                              Edit
                           </Link>
                           &nbsp;
                           <button onClick={() => onDelete(u)} className="btn-delete">
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
                  </tbody>
               )}
            </table>
            <div className="pagination-container">
               <Paginate links={links} paginate={paginate} />
            </div>
         </div>
      </div>
   );
}
