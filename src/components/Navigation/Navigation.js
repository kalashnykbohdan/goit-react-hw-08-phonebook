import React from 'react';
import {NavLink} from 'react-router-dom'
import routes from '../../routes'
import styles from './Navigation.module.css';
// import '../index.css';

const Navigation = () => (
<div className={styles.wrapper}>
    <ul className={styles.list}>
        <li>
            <NavLink 
                exact 
                to={routes.home} 
                className={styles.link}
                activeClassName={styles.active}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to={routes.register} 
                className={styles.link} 
                activeClassName={styles.active}
            >
                Register
            </NavLink>
        </li>
        <li>
            <NavLink 
                to={routes.login} 
                className={styles.link} 
                activeClassName={styles.active}
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink 
                to={routes.contacts} 
                className={styles.link} 
                activeClassName={styles.active}
            >
                Contacts
            </NavLink>
        </li>
    </ul>
</div>)


export default Navigation;