import React from 'react';
import {connect} from 'react-redux';
import contactAction from '../../redux/contacts/contactAction';
import contactsSelector from '../../redux/contacts/cnotactsSelectors';

const Filter = ({value, onChangeFilter}) => (
        <div>
            <input 
                type="text" 
                className="TaskEditor-input" 
                value={value} 
                onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
);

const mapStateToProps = (state) => ({
    value: contactsSelector.getFilter(state),
  });

const mapDispatchToProps = {
    onChangeFilter: contactAction.filterContact,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);