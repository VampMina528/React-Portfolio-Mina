import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(){
    const currentPage = useLocation(). pathname;
    return (
<ul className=''>
    <li className=''>
        <Link
            to= '/Aboutme'
            className={currentPage === '/Aboutme' ? 'nav-link active' : 'nav-link'}>
                About Mina
            </Link>
    </li>
    <li className=''>
        <Link
            to= '/Portfolio'
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
            </Link>
    </li>
    <li className=''>
        <Link
            to= '/Contact'
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
            </Link>
    </li>
    <li className=''>
        <Link
            to= '/Resume'
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
            </Link>
    </li>
</ul>

    )
};
export default Navigation;