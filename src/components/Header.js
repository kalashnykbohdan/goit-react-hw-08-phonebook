import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const styles = {
    header: {
        display: 'flex',
        justifyConter: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black'
    }
}

const Header = ({isAuthenticated}) => (
    console.log(isAuthenticated),
    <header style={styles.header}>
        <Navigation/>
        {isAuthenticated && <UserMenu/>}
    </header>
);
const mapStateToProps = state =>({
    isAuthenticated: authSelectors.isAuthenticated(state),
})
export default connect(mapStateToProps)(Header);