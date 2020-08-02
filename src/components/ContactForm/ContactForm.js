import React, {Component} from 'react';

import {connect} from 'react-redux';
import contactOperation from '../../redux/contacts/contactOperations';
import style from'./contactForm.module.css';

import { Toast } from "toaster-js"
import "toaster-js/default.css";



class ContactForm extends Component {
    state = {
        name:'',
        number:'',
    };
    handleChange = e => {

        const {name, value} = e.target;
        this.setState({
            [name]:value,
        })
    }

    handleSubmit = e =>{
        e.preventDefault();

        
        if(this.state.name === '' || this.state.number === ''){

            new Toast("Не введено имя, или номер телефона!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);    
        }
        else{
            this.props.onAddContact({ ...this.state });
        }
        this.setState({name:'',number:''});
    }

    render() {
        const {name, number} = this.state;
        return (
            <form className={style.contactForm} onSubmit={this.handleSubmit}>
                <label>
                <p className={style.p_label}>Name</p>
                    <input 
                        className="Name-input"
                        type="text"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                    />
                </label>
                <p className={style.p_label}>Namber</p>
                    <input 
                        className="Number-input"
                        type="tel" 
                        value={number} 
                        onChange={this.handleChange}
                        name="number"
                    />
                <br/>
                <button type="submit" className={style.submit_form}>Add contact</button>
                
            </form>
      )
    };
}

const mapDispatchToProps = dispatch => ({
    onAddContact: content => dispatch(contactOperation.addContact(content)),
  });

//   const mapDispatchToProps = ({
//     onAddContact: contactOperation.addContact,
//   });

export default connect(null, mapDispatchToProps)(ContactForm);

