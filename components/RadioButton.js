import React from 'react';
import { propTypes } from 'prop-types';

const RadioButton = (props) => {    
    return(
        <input type="radio" name={props.name} id={props.id} value={props.value}/>
    );   
};

RadioButton.propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    //selectedOptions: React.PropTypes.array
}

export default RadioButton;