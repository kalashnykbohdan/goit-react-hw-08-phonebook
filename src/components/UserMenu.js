import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';


const styles = {
    wrapper: {
        width: '300px',
        
    }
}

const UserMenu = ({
    avatar,
    name,
    onLogout,
}) => (console.log(onLogout),
    <div style={styles.wrapper}>
        <img src={avatar} alt='' width='32'/>
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>
);
const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar:
    "https://nexus.getvera.com/assets/base_defaultv4/img/user_new.png",
    
})

export default connect(mapStateToProps,{onLogout:authOperations.logOut})(UserMenu);