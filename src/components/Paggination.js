import React from 'react'
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Paggination({postsPerPage, totalPosts, paginate}) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
        
    }

  return (
    <nav>
<ul className='pagination'>
    {
        pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a href='!#' className='page-link' onClick={() => paginate(number)}>
                    {number}
                </a>
            </li>
        ))
    }
</ul>

    </nav>
  )
}

export default Paggination