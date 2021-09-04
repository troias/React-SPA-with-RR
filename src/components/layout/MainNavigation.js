import classes from './MainNavigation.module.css'
import Logo from '../UI/Logo'
import React from 'react'
import {Link} from 'react-router-dom'

const MainNavigation = () => {
    return (



        <header className={classes.header}>
            <Link to='/'>
           
            <Logo className={classes.logo} />
            </Link>
            <nav className={classes.nav}>
                <ul >

                    <li><Link to="/quotes"> All Quotes </Link></li>
                    <li><Link to="/add-quote"> Add a Quote </Link></li>
                </ul>
            </nav>
        </header>




    )
}

export default MainNavigation
