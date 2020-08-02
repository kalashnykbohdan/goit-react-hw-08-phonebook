import React, { Component } from 'react';
import style from '../index.css';
import {connect} from 'react-redux';
import authOperations from '../redux/auth/authOperations';

class Login extends Component {
    state = {
        email:'',
        password:'',
     };

     handleChange = ({target: {name, value}}) => {
         this.setState({[name]: value})
     }
     handleSubmit = e => {
         e.preventDefault();

         this.props.onLogin({...this.state});
         this.setState({name:'', email:'',password:''})
     }

    render() {

        const {email, password} = this.state;

        return (
            <div>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit} style={style.form}>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }

}
export default connect(null,{onLogin:authOperations.logIn})(Login);