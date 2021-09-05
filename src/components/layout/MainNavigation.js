import classes from './MainNavigation.module.css'
import Logo from '../UI/Logo'
import React from 'react'
import {NavLink} from 'react-router-dom'

const MainNavigation = () => {
    return (



        <header className={classes.header}>
            <NavLink  to='/'>
           
            <Logo className={classes.logo} />
            </NavLink >
            <nav className={classes.nav}>
                <ul >

                    <li><NavLink to="/quotes"> All Quotes </NavLink></li>
                    <li><NavLink to="/add-quote"> Add a Quote </NavLink></li>
                </ul>
            </nav>
        </header>




    )
}

export default MainNavigation
