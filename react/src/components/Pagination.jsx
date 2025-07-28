import React from 'react';

const Paginate = ({ links, paginate }) => {
   return (
      <nav>
         <ul className="pagination">
            {links.map((link, index) => (
               <li key={index} className="pagination-item">
                  <button
                     onClick={() => {
                        if (link.url) {
                           const page = new URL(link.url).searchParams.get('page');
                           paginate(parseInt(page));
                        }
                     }}
                     disabled={!link.url || link.active}
                     className={`pagination-button ${link.active ? 'active' : ''}`}
                     dangerouslySetInnerHTML={{ __html: link.label }}
                  />
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Paginate;
