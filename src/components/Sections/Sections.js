import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

function Sections({title, children}){
    return (
        <section>
            <Header/>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Sections.defaultProps = {
    title: '',
}

export default Sections;
