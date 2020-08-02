import React, { Component } from 'react';
import {connect} from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import styles from '../index.css';

class Register extends Component {
    state = {
        name:'',
        email:'',
        password:'',
     };

     handleChange = ({target: {name, value}}) => {
         this.setState({[name]: value})
     }
     handleSubmit = e => {
         e.preventDefault();
        // console.log(this.state.name);
         this.props.onRegister({...this.state});
     }

    render() {
        const {name, email, password} = this.state;
        return (
            <div>
                <h2>Register</h2>

                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label className={styles.label}>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }

}
export default connect(null,{onRegister: authOperations.register})(Register);